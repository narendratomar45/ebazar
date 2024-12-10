import React from "react";
import { FaBox } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCard } from "react-icons/io5";

const Profile = () => {
  return (
    <>
      <div className=" w-[80%] my-10 flex flex-wrap justify-center gap-5 mx-auto">
        <div className=" w-[320px] h-36 border border-gray-400 bg-white rounded-lg shadow-lg flex justify-between items-center p-6">
          <div>
            <FaBox className="text-3xl text-indigo-700" />
          </div>
          <div>
            <h1 className="font-medium text-xl">Your Orders</h1>
            <p>Track,return or buy things again</p>
          </div>
        </div>
        <div className=" w-[320px] h-36 border border-gray-400 bg-white rounded-lg shadow-lg flex justify-between items-center p-4 gap-5 ">
          <div>
            <BiSolidLock className="text-4xl text-indigo-700" />
          </div>
          <div>
            <h1 className="font-medium text-xl">Login & security</h1>
            <p>Edit login, name, and mobile number</p>
          </div>
        </div>
        <div className=" w-[320px] h-36 border border-gray-400 bg-white rounded-lg shadow-lg flex justify-between items-center p-4 ">
          <div>
            <FaMapMarkerAlt className="text-3xl text-indigo-700" />
          </div>
          <div>
            <h1 className="font-medium text-xl"> Your Address</h1>
            <p>Edit address for orders and gifts</p>
          </div>
        </div>
        <div className=" w-[320px] h-36 border border-gray-400 bg-white rounded-lg shadow-lg flex justify-between items-center p-2 gap-4">
          <div className="bg-indigo-700 text-white text-xl font-bold p-2 rounded shadow-lg">
            <p>E-Bazar</p>
            <p>Business</p>
          </div>
          <div>
            <h1 className=" font-medium text-xl">Your business account</h1>
            <p>
              Sign up for free to save upto 28% GST invoice and bulk discounts.
            </p>
          </div>
        </div>
        <div className=" w-[320px] h-36 border border-gray-400 bg-white rounded-lg shadow-lg flex justify-between items-center p-6">
          <div>
            <IoCard className="text-4xl text-indigo-700" />
          </div>
          <div>
            <h1 className="font-medium text-xl">Payment Options</h1>
            <p>Edit or add payment methods</p>
          </div>
        </div>
        <div className=" w-[320px] h-36 border border-gray-400 bg-white rounded-lg shadow-lg flex justify-between items-center p-4 gap-6">
          <div>
            <RiCustomerServiceFill className="text-3xl text-indigo-700" />
          </div>
          <div>
            <h1 className="font-medium text-xl">Contact Us</h1>
            <p>Contact out customer service via phone or chat</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
