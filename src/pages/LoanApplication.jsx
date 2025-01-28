import { useState } from "react";

const LoanApplication = () => {
  // State for loan details
  const [loanDetails, setLoanDetails] = useState({
    guarantors: [
      { name: "", email: "", location: "", cnic: "" },
      { name: "", email: "", location: "", cnic: "" },
    ],
    statement: null,
    salarySheet: null,
    address: "",
    phone: "",
  });

  // State for slip generation
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [slipDetails, setSlipDetails] = useState(null);

  // Handle form changes
  const handleInputChange = (e, field, guarantorIndex = null) => {
    if (guarantorIndex !== null) {
      const updatedGuarantors = [...loanDetails.guarantors];
      updatedGuarantors[guarantorIndex][field] = e.target.value;
      setLoanDetails((prev) => ({ ...prev, guarantors: updatedGuarantors }));
    } else {
      setLoanDetails((prev) => ({ ...prev, [field]: e.target.value }));
    }
  };

  // Handle file uploads
  const handleFileUpload = (e, field) => {
    setLoanDetails((prev) => ({ ...prev, [field]: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mock token number, QR code, and appointment details
    const tokenNumber = `TOKEN-${Math.floor(1000 + Math.random() * 9000)}`;
    const qrCode = `https://example.com/qr-code/${tokenNumber}`;
    const appointmentDetails = {
      date: new Date().toLocaleDateString(),
      time: "10:00 AM",
      location: "Saylani Microfinance Office",
    };
    setSlipDetails({ tokenNumber, qrCode, appointmentDetails });
    setApplicationSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Loan Application</h1>

        {!applicationSubmitted ? (
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Address</label>
              <input
                type="text"
                value={loanDetails.address}
                onChange={(e) => handleInputChange(e, "address")}
                className="w-full border rounded-lg p-2"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                value={loanDetails.phone}
                onChange={(e) => handleInputChange(e, "phone")}
                className="w-full border rounded-lg p-2"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Guarantors' Information */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Guarantors</h2>
            {loanDetails.guarantors.map((guarantor, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-semibold text-gray-700">Guarantor {index + 1}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={guarantor.name}
                    onChange={(e) => handleInputChange(e, "name", index)}
                    className="border rounded-lg p-2"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    value={guarantor.email}
                    onChange={(e) => handleInputChange(e, "email", index)}
                    className="border rounded-lg p-2"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    value={guarantor.location}
                    onChange={(e) => handleInputChange(e, "location", index)}
                    className="border rounded-lg p-2"
                    placeholder="Location"
                    required
                  />
                  <input
                    type="text"
                    value={guarantor.cnic}
                    onChange={(e) => handleInputChange(e, "cnic", index)}
                    className="border rounded-lg p-2"
                    placeholder="CNIC"
                    required
                  />
                </div>
              </div>
            ))}

            {/* Optional Documents */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Statement (Optional)</label>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, "statement")}
                className="w-full"
                accept=".pdf,.doc,.docx"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Salary Sheet (Optional)</label>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, "salarySheet")}
                className="w-full"
                accept=".pdf,.doc,.docx"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted</h2>
            <p className="mb-4">Here are your application details:</p>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <p>
                <strong>Token Number:</strong> {slipDetails.tokenNumber}
              </p>
              <p>
                <strong>Appointment Date:</strong> {slipDetails.appointmentDetails.date}
              </p>
              <p>
                <strong>Appointment Time:</strong> {slipDetails.appointmentDetails.time}
              </p>
              <p>
                <strong>Office Location:</strong> {slipDetails.appointmentDetails.location}
              </p>
              <p>
                <strong>QR Code:</strong>
              </p>
              <img
                src={slipDetails.qrCode}
                alt="QR Code"
                className="w-32 h-32 mx-auto my-4"
              />
              <button
                className="bg-green-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-green-600"
                onClick={() => alert("Downloading slip...")}
              >
                Download Slip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanApplication;
