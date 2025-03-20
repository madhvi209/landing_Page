import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Reviews</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>

          </ul>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Financing</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">ContactUs</a></li>
            <li><a href="#" className="hover:underline">Locations</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p>Email: <a href="mailto:hello@GMAIL.com" className="hover:underline">hello@GMAIL.com</a></p>
          <p>+91 9999977777</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} EdTech Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
