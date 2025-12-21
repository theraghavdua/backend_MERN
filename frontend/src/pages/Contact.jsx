import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-white">
        <p>
          CONTACT <span className="text-white-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-12 flex flex-col justify-center md:flex-row gap-12 mb-28 text-sm">
        <img
          className="w-full rounded-xl md:max-w-[380px]"
          src={assets.contact_image}
          alt="Office"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-white">HEAD OFFICE</p>

          <p className="text-gray-400 leading-relaxed">
            3rd Floor, TechPark Tower <br />
            Sector 62, Noida <br />
            Uttar Pradesh, India – 201309
          </p>

          <p className="text-gray-400 leading-relaxed">
            Phone: +91 98765 43210 <br />
            Email: support@mediconnect.in
          </p>

          <p className="font-semibold text-lg text-white">
            CAREERS AT MEDICONNECT
          </p>

          <p className="text-gray-400">
            Join our growing team and help build the future of digital
            healthcare in India.
          </p>

       
        </div>
      </div>
    </div>
  );
};

export default Contact;
