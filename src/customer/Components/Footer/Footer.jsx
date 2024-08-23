import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">
        <nav className="mb-8">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Partners
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          
        </div>
        <p className="text-gray-500">
          © 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
