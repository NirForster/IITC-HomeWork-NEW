import { useState } from "react";
import { Link } from "react-router-dom";
// import whiteLogoIcon from "../assets/logo-icon-white.png";
import blackLogoIcon from "../assets/logo-icon-dark.png";
import CustomDropdownMenu from "./CustomDropdownMenu";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth(); // Access user data from AuthContext

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-card text-card-foreground shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center align-middle p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={blackLogoIcon}
              alt="Business Finder Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold text-primary">Business Finder</h1>
          </Link>
          <nav className="hidden md:flex md:align-middle space-x-6">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/businesses" className="hover:text-primary">
              Businesses
            </Link>
            {user ? (
              <Link to="/account" className="hover:text-primary">
                Account
              </Link>
            ) : (
              <>
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
                <Link to="/signup" className="hover:text-primary">
                  Signup
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* User Avatar / Dropdown Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {user && <CustomDropdownMenu />}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none hover:bg-gray-700"
          onClick={toggleMobileMenu}
        >
          <span className="block w-6 h-0.5 bg-card-foreground"></span>
          <span className="block w-6 h-0.5 bg-card-foreground mt-1"></span>
          <span className="block w-6 h-0.5 bg-card-foreground mt-1"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className="hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/businesses"
              className="hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Businesses
            </Link>
            {user ? (
              <Link
                to="/account"
                className="hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Account
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Signup
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
