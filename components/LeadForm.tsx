'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface LeadFormProps {
  defaultType?: 'quote' | 'bulk';
  onClose?: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  customerType: string;
  region: string;
  numberOfProperties: string;
  numberOfBins: string;
  notes: string;
}

export default function LeadForm({ defaultType = 'quote', onClose }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    customerType: '',
    region: '',
    numberOfProperties: '',
    numberOfBins: '',
    notes: '',
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          requestType: defaultType,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thanks</h3>
        <p className="text-lg mb-6">
          We will respond within 1 business day with fit confirmation and next steps.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-2 bg-brand-red text-white font-bold rounded hover:bg-red-700 transition-colors"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-red ${
              errors.name ? 'border-brand-red' : 'border-gray-300'
            }`}
            aria-label="Name"
            aria-required="true"
          />
          {errors.name && (
            <p className="text-brand-red text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-red ${
              errors.email ? 'border-brand-red' : 'border-gray-300'
            }`}
            aria-label="Email"
            aria-required="true"
          />
          {errors.email && (
            <p className="text-brand-red text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-label="Phone"
          />
        </div>

        {/* Customer Type */}
        <div>
          <label htmlFor="customerType" className="block text-sm font-medium mb-2">
            Customer Type
          </label>
          <select
            id="customerType"
            name="customerType"
            value={formData.customerType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-label="Customer Type"
          >
            <option value="">Select type</option>
            <option value="homeowner">Homeowner</option>
            <option value="property-manager">Property Manager</option>
            <option value="investor">Investor</option>
            <option value="short-term-rental">Short-Term Rental</option>
          </select>
        </div>

        {/* Region */}
        <div>
          <label htmlFor="region" className="block text-sm font-medium mb-2">
            Region
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-label="Region"
          >
            <option value="">Select region</option>
            <option value="poconos-pa">Poconos PA</option>
            <option value="other-pa-mountains">Other PA mountains</option>
            <option value="other-bear-country">Other bear country</option>
          </select>
        </div>

        {/* Number of Properties */}
        <div>
          <label htmlFor="numberOfProperties" className="block text-sm font-medium mb-2">
            Number of Properties/Units
          </label>
          <input
            type="number"
            id="numberOfProperties"
            name="numberOfProperties"
            value={formData.numberOfProperties}
            onChange={handleInputChange}
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-label="Number of Properties"
          />
        </div>

        {/* Number of Bins */}
        <div>
          <label htmlFor="numberOfBins" className="block text-sm font-medium mb-2">
            Number of Bins Per Property
          </label>
          <input
            type="number"
            id="numberOfBins"
            name="numberOfBins"
            value={formData.numberOfBins}
            onChange={handleInputChange}
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-label="Number of Bins"
          />
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <label htmlFor="photo" className="block text-sm font-medium mb-2">
          Photo of Bin Area (Optional)
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-red file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          aria-label="Photo Upload"
        />
        {photoFile && (
          <p className="text-sm text-gray-600 mt-1">
            Selected: {photoFile.name}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
          aria-label="Additional Notes"
        />
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex items-center justify-end space-x-4">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-brand-red text-white font-bold rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : `Submit ${defaultType === 'bulk' ? 'Bulk Pricing Request' : 'Quote Request'}`}
        </button>
      </div>
    </form>
  );
}
