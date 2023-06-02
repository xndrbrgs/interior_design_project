import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-100 p-5 sm:p-20">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="text-xs space-y-4 text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>Estimates</p>
          <p>Research</p>
          <p>Help</p>
          <p>Advise</p>
        </div>

        <div className="text-xs space-y-4 text-gray-800">
          <h5 className="font-bold">HOUSING</h5>
          <p>Fair Housing Guide</p>
          <p>Blog</p>
          <p>AI</p>
        </div>

        <div className="text-xs space-y-4 text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Terms of Service</p>
          <p>Privacy Portal</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-2">
        <Image
          src="https://i.ibb.co/PMgmb5d/logo.png"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Footer;
