import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-12">
    <div className="max-w-6xl mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} ShopMate. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
    </div>
  </footer>
);

export default Footer;
