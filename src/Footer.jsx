import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-16 text-center text-gray-600 border-t">
      <p>© {new Date().getFullYear()} NovaLink. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
