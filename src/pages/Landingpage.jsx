
"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loanAmount, setLoanAmount] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setLoanAmount("")
    setLoanTerm("")
    setMonthlyPayment(null)
  }

  const calculateLoan = (e) => {
    e.preventDefault()
    const amount = Number.parseFloat(loanAmount)
    const termInMonths = Number.parseInt(loanTerm) * 12

    if (amount && termInMonths) {
      // Simple calculation without interest
      const monthly = amount / termInMonths
      setMonthlyPayment(monthly.toFixed(2))
    }
  }

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-white-500 to-green-500 text-white py-6 shadow-md">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Link to="/" className="text-2xl sm:text-4xl font-bold text-black hover:text-white-200">
              Saylani Microfinance
            </Link>
          </Link>
          <nav className="flex flex-wrap gap-2 sm:gap-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

   {/* Hero Section */}
<section className="bg-gradient-to-b from-blue-100 to-white py-16 sm:py-20 lg:py-24">
  <div className="w-full max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-800 mb-6">
      Empower Your Future with Interest-Free Loans
    </h2>
    <p className="text-base sm:text-lg text-gray-700 mb-8">
      Explore our loan options tailored for weddings, home construction, businesses, and education.
    </p>
  
  {/* Loan Request Button */}
<Link
  to="/LoanApplication"
  className="bg-white-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-200"
>
  Loan Request
</Link>
  </div>
</section>


      {/* Loan Categories Section */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">Our Loan Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <h4 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">{category.title}</h4>
                <ul className="text-sm text-gray-700 mb-3">
                  <li>
                    <strong>Maximum Loan:</strong> {category.limit}
                  </li>
                  <li>
                    <strong>Loan Period:</strong> {category.timeperiod}
                  </li>
                </ul>
                {category.subcategories && (
                  <div>
                    <strong className="text-gray-800">Subcategories:</strong>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                      {category.subcategories.split(",").map((subcategory, index) => (
                        <li key={index}>{subcategory.trim()}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">{selectedCategory.title} Calculator</h3>
            <form onSubmit={calculateLoan}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loanAmount">
                  Loan Amount (PKR)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="loanAmount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  max={
                    selectedCategory.limit === "Based on requirement"
                      ? Number.POSITIVE_INFINITY
                      : Number(selectedCategory.limit.replace(/[^0-9]/g, "")) * 100000
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loanTerm">
                  Loan Term (Years)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="loanTerm"
                  type="number"
                  placeholder="Enter loan term"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  max={Number.parseInt(selectedCategory.timeperiod)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Calculate
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text- font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                >
                  Close
                </button>
              </div>
            </form>
            {monthlyPayment && (
              <div className="mt-4 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 font-semibold">Estimated Monthly Payment: PKR {monthlyPayment}</p>
                <a href="">
                <button>Proceed</button>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="w-full max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Saylani Microfinance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Navigation links
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/register", label: "Register" },
  { to: "/login", label: "Login" },
 

]

// Loan categories
const categories = [
  {
    title: "Wedding Loans",
    subcategories: "Valima,Furniture,Valima Food,Jahez",
    limit: "PKR 5 Lakh",
    timeperiod: "3",
  },
  {
    title: "Home Construction Loans",
    limit: "PKR 10 Lakh",
    timeperiod: "5",
  },
  {
    title: "Business Startup Loans",
    subcategories: "Buy Stall,Advance Rent for Shop,Shop Assets,Shop Machinery",
    limit: "PKR 10 Lakh",
    timeperiod: "5",
  },
  {
    title: "Education Loans",
    subcategories: "University Fees,Child Fees Loan",
    limit: "Based on requirement",
    timeperiod: "4",
  },
]

export default LandingPage

