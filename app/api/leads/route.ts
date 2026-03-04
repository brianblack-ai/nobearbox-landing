import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Resend } from 'resend';

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  customerType: string;
  region: string;
  numberOfProperties: string;
  numberOfBins: string;
  notes: string;
  requestType: 'quote' | 'bulk';
}

const CUSTOMER_TYPE_LABELS: Record<string, string> = {
  homeowner: 'Homeowner',
  'property-manager': 'Property Manager',
  investor: 'Investor',
  'short-term-rental': 'Short-Term Rental',
};

const REGION_LABELS: Record<string, string> = {
  'poconos-pa': 'Poconos PA',
  'other-pa-mountains': 'Other PA Mountains',
  'other-bear-country': 'Other Bear Country',
};

async function appendToGoogleSheet(lead: LeadPayload) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const sheetId = process.env.GOOGLE_SHEET_ID;

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'short',
    timeStyle: 'short',
  });

  const row = [
    timestamp,
    lead.requestType === 'bulk' ? 'Bulk Pricing' : 'Quote',
    lead.name,
    lead.email,
    lead.phone || '',
    CUSTOMER_TYPE_LABELS[lead.customerType] || lead.customerType || '',
    REGION_LABELS[lead.region] || lead.region || '',
    lead.numberOfProperties || '',
    lead.numberOfBins || '',
    lead.notes || '',
    'New',
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Leads!A:K',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] },
  });
}

async function sendEmailNotification(lead: LeadPayload) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!notificationEmail) return;

  const typeLabel = lead.requestType === 'bulk' ? 'Bulk Pricing Request' : 'Quote Request';
  const customerLabel = CUSTOMER_TYPE_LABELS[lead.customerType] || lead.customerType || 'Not specified';
  const regionLabel = REGION_LABELS[lead.region] || lead.region || 'Not specified';

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
    to: notificationEmail,
    subject: `New ${typeLabel} from ${lead.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #000; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">New ${typeLabel}</h1>
        </div>
        <div style="padding: 24px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Name</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">${lead.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Email</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">
                <a href="mailto:${lead.email}">${lead.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Phone</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">
                ${lead.phone ? `<a href="tel:${lead.phone}">${lead.phone}</a>` : 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Type</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">${customerLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Region</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">${regionLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Properties</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">${lead.numberOfProperties || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Bins/Property</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">${lead.numberOfBins || 'Not specified'}</td>
            </tr>
            ${lead.notes ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #e0e0e0;">Notes</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #e0e0e0;">${lead.notes}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        <div style="background: #DC2626; padding: 12px; text-align: center;">
          <a href="https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}" style="color: #fff; text-decoration: none; font-weight: bold;">
            View All Leads in Google Sheet
          </a>
        </div>
      </div>
    `,
  });
}

async function sendConfirmationEmail(lead: LeadPayload) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const typeLabel = lead.requestType === 'bulk' ? 'bulk pricing request' : 'quote request';

  await resend.emails.send({
    from: fromEmail,
    to: lead.email,
    subject: 'We got your request - No Bear Box',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #000; padding: 24px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">No Bear Box</h1>
        </div>
        <div style="padding: 32px 24px; background: #ffffff;">
          <p style="font-size: 16px; color: #333; margin: 0 0 16px;">Hi ${lead.name},</p>
          <p style="font-size: 16px; color: #333; margin: 0 0 16px;">
            Thank you for your ${typeLabel}. We received your information and will get back to you
            within 1 business day with fit confirmation and next steps.
          </p>
          <p style="font-size: 16px; color: #333; margin: 0 0 16px;">
            If you have any questions in the meantime, reply to this email or reach out at
            <a href="mailto:info@nobearbox.com" style="color: #DC2626;">info@nobearbox.com</a>.
          </p>
          <p style="font-size: 16px; color: #333; margin: 0;">Talk soon,<br/>The No Bear Box Team</p>
        </div>
        <div style="background: #f5f5f4; padding: 16px 24px; text-align: center; font-size: 12px; color: #999;">
          <p style="margin: 0;">No Bear Box &middot; Bear-resistant trash enclosures &middot; Built in the USA</p>
        </div>
      </div>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const results = await Promise.allSettled([
      appendToGoogleSheet(body),
      sendEmailNotification(body),
      sendConfirmationEmail(body),
    ]);

    const sheetResult = results[0];
    const emailResult = results[1];
    const confirmationResult = results[2];

    if (sheetResult.status === 'rejected') {
      console.error('Google Sheets error:', sheetResult.reason);
    }
    if (emailResult.status === 'rejected') {
      console.error('Email notification error:', emailResult.reason);
    }
    if (confirmationResult.status === 'rejected') {
      console.error('Confirmation email error:', confirmationResult.reason);
    }

    if (sheetResult.status === 'rejected' && emailResult.status === 'rejected') {
      return NextResponse.json(
        { error: 'Failed to process submission. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission. Please try again.' },
      { status: 500 }
    );
  }
}
