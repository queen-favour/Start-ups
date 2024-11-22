import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div>
        <div className="bg-[#d9d3d3] h-[30vh] text-black text-lg items-center justify-center">
          <div className=" p-6  h-full ">
            <div className="flex justify-between">
              <Link>Contact us</Link>
              <Link>Privacy Policy</Link>
              <Link>2024 Program</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
