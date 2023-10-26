import React, { memo } from "react";

const FooterMemo = () => {
  return (
    <footer className="bg-gray-900 py-6 px-2">
      <div className="container mx-auto items-left">
        <div className="text-white grid-rows-2 gap-4">
          <h1 className="text-xl">Burger King&copy; Delivery</h1>
          <div className="sm:flex gap-7">
            <p>15000 25</p>
            <p>guestservice@burgerking.co.id</p>
            <p>social media</p>
          </div>
        </div>
        <div className="mt-2">
            <p className="text-xs secondary-grey-bk-font">About Us | Kebijakan Privasi | Syarat dan Ketentuan | TM & &copy; {new Date().getFullYear()} Burger King Corporation. Used Under License. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Footer = memo(FooterMemo);
