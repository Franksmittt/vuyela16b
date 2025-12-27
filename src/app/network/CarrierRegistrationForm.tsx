'use client';

import { useState } from 'react';
import { ArrowRight, Building2, ShieldCheck, Truck, Users, Upload, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export function CarrierRegistrationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    vatNumber: '',
    yearsInOperation: '',
    dotMcNumber: '',
    insuranceFile: null as File | null,
    safetyRating: '',
    powerUnits: '',
    equipmentTypes: [] as string[],
    preferredLanes: '',
    reference1Company: '',
    reference1Contact: '',
    reference1Phone: '',
    reference2Company: '',
    reference2Contact: '',
    reference2Phone: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'termsAccepted') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          equipmentTypes: checked
            ? [...prev.equipmentTypes, value]
            : prev.equipmentTypes.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, insuranceFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Application submitted successfully! We will review your registration and contact you within 5-7 business days.');
      setFormData({
        companyName: '',
        registrationNumber: '',
        vatNumber: '',
        yearsInOperation: '',
        dotMcNumber: '',
        insuranceFile: null,
        safetyRating: '',
        powerUnits: '',
        equipmentTypes: [],
        preferredLanes: '',
        reference1Company: '',
        reference1Contact: '',
        reference1Phone: '',
        reference2Company: '',
        reference2Contact: '',
        reference2Phone: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        termsAccepted: false,
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Section 1: Business Identification */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Business Identification</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-white mb-2">
              Registered Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="ABC Transport (Pty) Ltd"
            />
          </div>
          <div>
            <label htmlFor="registrationNumber" className="block text-sm font-medium text-white mb-2">
              Company Registration Number *
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              required
              value={formData.registrationNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="2023/123456/07"
            />
          </div>
          <div>
            <label htmlFor="vatNumber" className="block text-sm font-medium text-white mb-2">
              VAT Number *
            </label>
            <input
              type="text"
              id="vatNumber"
              name="vatNumber"
              required
              value={formData.vatNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="4123456789"
            />
          </div>
          <div>
            <label htmlFor="yearsInOperation" className="block text-sm font-medium text-white mb-2">
              Years in Operation *
            </label>
            <input
              type="number"
              id="yearsInOperation"
              name="yearsInOperation"
              required
              min="2"
              value={formData.yearsInOperation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="5"
            />
            <p className="text-gray-400 text-xs mt-1">Minimum 2 years required</p>
          </div>
        </div>
      </div>

      {/* Section 2: Compliance & Documentation */}
      <div className="pt-6 border-t border-[#3a3a3a]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Compliance & Documentation</h3>
        </div>
        <div className="space-y-6">
          <div>
            <label htmlFor="dotMcNumber" className="block text-sm font-medium text-white mb-2">
              DOT/MC Number or PRDP/Operator Card *
            </label>
            <input
              type="text"
              id="dotMcNumber"
              name="dotMcNumber"
              required
              value={formData.dotMcNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="MC-123456"
            />
          </div>
          <div>
            <label htmlFor="insuranceFile" className="block text-sm font-medium text-white mb-2">
              Certificate of Insurance (PDF) *
            </label>
            <div className="relative">
              <input
                type="file"
                id="insuranceFile"
                name="insuranceFile"
                required
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="insuranceFile"
                className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg cursor-pointer hover:border-orange-500 transition-colors"
              >
                <Upload className="h-5 w-5 text-orange-500" />
                <span className="text-white text-sm">
                  {formData.insuranceFile ? formData.insuranceFile.name : 'Upload Insurance Certificate (PDF)'}
                </span>
              </label>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Minimum coverage: R1,000,000 Cargo Liability / R10,000,000 Auto Liability
            </p>
          </div>
          <div>
            <label htmlFor="safetyRating" className="block text-sm font-medium text-white mb-2">
              Safety Rating *
            </label>
            <select
              id="safetyRating"
              name="safetyRating"
              required
              value={formData.safetyRating}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
            >
              <option value="">Select safety rating</option>
              <option value="satisfactory">Satisfactory</option>
              <option value="conditional">Conditional</option>
              <option value="unsatisfactory">Unsatisfactory</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 3: Fleet & Equipment */}
      <div className="pt-6 border-t border-[#3a3a3a]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
            <Truck className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Fleet & Equipment</h3>
        </div>
        <div className="space-y-6">
          <div>
            <label htmlFor="powerUnits" className="block text-sm font-medium text-white mb-2">
              Total Number of Power Units (Trucks) *
            </label>
            <input
              type="number"
              id="powerUnits"
              name="powerUnits"
              required
              min="1"
              value={formData.powerUnits}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Equipment Types * (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Side-tippers', 'Flatbeds', 'Reefer', 'Skeleton/Container Trailers'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="equipmentType"
                    value={type}
                    checked={formData.equipmentTypes.includes(type)}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange-500 bg-[#1a1a1a] border-[#3a3a3a] rounded focus:ring-orange-500"
                  />
                  <span className="text-gray-300 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="preferredLanes" className="block text-sm font-medium text-white mb-2">
              Preferred Lanes/Regions *
            </label>
            <textarea
              id="preferredLanes"
              name="preferredLanes"
              required
              rows={3}
              value={formData.preferredLanes}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              placeholder="e.g., Johannesburg to Durban, Cape Town to Port Elizabeth"
            />
          </div>
        </div>
      </div>

      {/* Section 4: References */}
      <div className="pt-6 border-t border-[#3a3a3a]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Trade References</h3>
        </div>
        <p className="text-gray-300 text-sm mb-6">
          Provide two active trade references. Professional carriers always have these ready.
        </p>
        <div className="space-y-6">
          <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
            <h4 className="text-white font-semibold mb-4">Reference 1 *</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="reference1Company" className="block text-sm font-medium text-white mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="reference1Company"
                  name="reference1Company"
                  required
                  value={formData.reference1Company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label htmlFor="reference1Contact" className="block text-sm font-medium text-white mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="reference1Contact"
                  name="reference1Contact"
                  required
                  value={formData.reference1Contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Contact Name"
                />
              </div>
              <div>
                <label htmlFor="reference1Phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="reference1Phone"
                  name="reference1Phone"
                  required
                  value={formData.reference1Phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="+27 11 123 4567"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a]">
            <h4 className="text-white font-semibold mb-4">Reference 2 *</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="reference2Company" className="block text-sm font-medium text-white mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="reference2Company"
                  name="reference2Company"
                  required
                  value={formData.reference2Company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label htmlFor="reference2Contact" className="block text-sm font-medium text-white mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="reference2Contact"
                  name="reference2Contact"
                  required
                  value={formData.reference2Contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Contact Name"
                />
              </div>
              <div>
                <label htmlFor="reference2Phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="reference2Phone"
                  name="reference2Phone"
                  required
                  value={formData.reference2Phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="+27 11 123 4567"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="pt-6 border-t border-[#3a3a3a]">
        <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-white mb-2">
              Contact Name *
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              required
              value={formData.contactName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              required
              value={formData.contactEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label htmlFor="contactPhone" className="block text-sm font-medium text-white mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              required
              value={formData.contactPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="+27 11 123 4567"
            />
          </div>
        </div>
      </div>

      {/* Terms & Agreement */}
      <div className="pt-6 border-t border-[#3a3a3a]">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            required
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            className="w-5 h-5 mt-1 text-orange-500 bg-[#1a1a1a] border-[#3a3a3a] rounded focus:ring-orange-500"
          />
          <label htmlFor="termsAccepted" className="text-gray-300 text-sm leading-relaxed">
            I certify that all information provided is accurate and complete. I understand that Vuyela Group 
            will verify all documentation and references. I agree to comply with Vuyela Group's carrier standards 
            and operational requirements. *
          </label>
        </div>
        <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="text-gray-300 text-sm">
              <p className="font-semibold text-white mb-1">Review Process:</p>
              <p>Applications are reviewed within 5-7 business days. We will contact you via email or phone to discuss 
              your application and next steps. Only professional, compliant carriers will be accepted into our network.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !formData.termsAccepted}
        className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>Submitting...</>
        ) : (
          <>
            Submit Application
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}

