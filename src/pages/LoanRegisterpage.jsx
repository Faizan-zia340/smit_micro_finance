
import  { useState } from "react";

export default function LoanRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    loanCategory: "",
    loanAmount: "",
    loanTerm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Registration Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-green-400 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Loan Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* CNIC */}
          <div>
            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              value={formData.cnic}
              onChange={handleInputChange}
              className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your CNIC"
              required
            />
          </div>

          {/* Loan Category */}
          <div>
            <label htmlFor="loanCategory" className="block text-sm font-medium text-gray-700">
              Loan Category
            </label>
            <select
              id="loanCategory"
              name="loanCategory"
              value={formData.loanCategory}
              onChange={handleInputChange}
              className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            >
              <option value="">Select Category</option>
              <option value="Wedding Loans">Wedding Loans</option>
              <option value="Home Construction Loans">Home Construction Loans</option>
              <option value="Business Startup Loans">Business Startup Loans</option>
              <option value="Education Loans">Education Loans</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
              Loan Amount (PKR)
            </label>
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleInputChange}
              className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter loan amount"
              required
            />
          </div>

          {/* Loan Term */}
          <div>
            <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
              Loan Term (Years)
            </label>
            <input
              type="number"
              id="loanTerm"
              name="loanTerm"
              value={formData.loanTerm}
              onChange={handleInputChange}
              className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter loan term"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}