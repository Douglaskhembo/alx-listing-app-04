import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} ALXListing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
