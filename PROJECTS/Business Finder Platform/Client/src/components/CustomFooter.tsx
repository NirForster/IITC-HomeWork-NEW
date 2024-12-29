import whiteLogoIcon from "../assets/logo-icon-dark.png";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <div className="my-8 h-px  bg-black opacity-20 "></div>

        {/* Bottom Section: Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center align-middle justify-start space-x-4">
            <img src={whiteLogoIcon} alt="Logo" className="ml-10 w-12 h-12" />
          </div>
          {/* Social Links */}
          <div className="flex gap-6 text-lg ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook hover:text-primary"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter hover:text-primary"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin hover:text-primary"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram hover:text-primary"></i>
            </a>
          </div>

          {/* Copyright */}

          <div className="mt-4 pr-6 md:mt-0">
            &copy; {new Date().getFullYear()} Business Finder. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
