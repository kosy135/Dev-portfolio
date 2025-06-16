import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#3B3B3B] mt-5">
      <footer className="px-30 flex text-white justify-between pt-30">
        <div className="text-[#CCCCCC]">
          <img src="public/Images/Logo.png" alt="" />
          <p>NFT Marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <br />
          <img src="public/Images/Icons.png" alt="" />
        </div>
        <div>
          <p className="text-xl">Explore</p>
          <p className="text-[#CCCCCC]">Marketplace</p>
          <p className="text-[#CCCCCC]">Rankings</p>
          <p className="text-[#CCCCCC]">Connect a wallet</p>
        </div>
        <div className="">
          <p className="text-xl">Join Our Weekly Digest</p>
          <p className="text-[#CCCCCC]">
            Get exclusive promotions & updates <br /> straight to your inbox
          </p>
          <div class=" pt-15  bg-[#2B2B2B]">
            <div class="flex bg-white rounded-full ">
              <input
                type="email"
                placeholder="Enter your email here"
                class="px-4 text-sm text-black outline-none"
              />
              <button class="bg-purple-500 text-white px-5 h-10 text-sm ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
