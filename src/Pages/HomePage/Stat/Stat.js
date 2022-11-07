import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdOutlineChair } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

const Stat = () => {
  return (
    <div className="py-3">
      <div className="stats text-white py-5 w-full bg-gradient-to-r from-indigo-600 to-sky-500 shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <BiSupport className="inline-block w-20 h-20 stroke-current" />
          </div>
          <div className="stat-title">Online</div>
          <div className="stat-value text-primary">Telemedicine</div>
          <div className="stat-desc">service</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <MdOutlineChair className="inline-block w-20 h-20 stroke-current" />
          </div>
          <div className="stat-title">Physical</div>
          <div className="stat-value text-secondary">Chamber</div>
          <div className="stat-desc">service</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="">
              <GiMedicines className="inline-block w-20 h-20 text-white" />
            </div>
          </div>
          <div className="stat-value">Free</div>
          <div className="stat-title">Medicine Campaign</div>
          <div className="stat-desc text-white">in every year</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
