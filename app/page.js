import React from "react";
import Image from "next/image";
import banner from "./_svg/banner.svg";
import Trans from "./_svg/Trans.svg";
import { FaMoneyBillWave } from "react-icons/fa";

const page = () => {
  return (
    <div className="pt-[80px] p-[10px] w-full">
      {/* banner start */}
      <div className="">
        <Image src={banner} alt="banner" className="w-full h-auto" />
      </div>
      {/* banner end */}
      {/* chart start */}
      <div className="mt-4 flex flex-col gap-y-4 md:flex-row md:gap-x-4">
        <div className="w-full md:w-[40%]">
          <div className="w-full p-5 bg-primary-main-blue rounded-2xl">
            <div className="flex justify-between items-center text-white font-semibold text-[30px]">
              <h3>Balance</h3>{" "}
              <h3>
                <FaMoneyBillWave className="text-[30px]" />
              </h3>
            </div>
            <div className="mt-7">
              <h1 className="text-4xl font-bold text-white">$6000</h1>
            </div>
          </div>
          <div className="mt-3 flex  justify-between">
            <div className="w-[49%] rounded-2xl bg-primary-main-blue text-center cursor-pointer duration-200 hover:opacity-[0.7] text-white py-[20px] font-semibold">
              <p>Send</p>
            </div>
            <div className="w-[49%] rounded-2xl bg-primary-main-blue text-center cursor-pointer duration-200 hover:opacity-[0.7] text-white py-[20px] font-semibold">
              <p>Recieve</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <Image src={Trans} alt="chart" className="w-full h-auto" />
        </div>
      </div>
      {/* chart end */}
      {/* forms start */}
      <div className="mt-4 flex flex-col gap-y-4 md:flex-row md:gap-x-4">
        {/* form 1 start */}

        <div className="w-full md:w-[50%] flex flex-col gap-y-5">
        <div className=" rounded-xl flex flex-col gap-y-5 bg-primary-ash p-5">
            <div className="flex justify-center items-center text-center text-primary-main-blue font-semibold text-[30px]">
              <h3 className="text-center">Create Gift Card</h3>{" "}
            </div>
            <div className="">
            <h5 className="text-[20px] mb-1 text-primary-main-blue font-semibold">
              PIN:
            </h5>
            <input
              type="password"
              className=" w-full p-3 rounded-2xl border border-primary-orange"
              placeholder="Enter PIN Code"
            />
          </div>

            <div className="">
              <h5 className="text-[20px] mb-1 text-primary-main-blue font-semibold">
                Amount (MIND):
              </h5>
              <input
                type="number"
                className=" w-full p-3 rounded-2xl border border-primary-orange"
                placeholder="Enter Card ID"
              />
            </div>

            <div className="w-[100%] rounded-2xl bg-primary-main-blue text-center cursor-pointer duration-200 hover:opacity-[0.7] text-white py-[20px] font-semibold">
              <p>Check Gift Card Balance</p>
            </div>
          </div>
          <div className=" rounded-xl flex flex-col gap-y-5 bg-primary-ash p-5">
            <div className="flex justify-center items-center text-center text-primary-main-blue font-semibold text-[30px]">
              <h3 className="text-center">Check Gift Card Balance</h3>{" "}
            </div>

            <div className="">
              <h5 className="text-[20px] mb-1 text-primary-main-blue font-semibold">
                Card Id:
              </h5>
              <input
                type="number"
                className=" w-full p-3 rounded-2xl border border-primary-orange"
                placeholder="Enter Card ID"
              />
            </div>

            <div className="w-[100%] rounded-2xl bg-primary-main-blue text-center cursor-pointer duration-200 hover:opacity-[0.7] text-white py-[20px] font-semibold">
              <p>Check Gift Card Balance</p>
            </div>
          </div>
          
          
        </div>
        {/* form 1 end */}
        {/* form 2 start */}
        <div className="w-full md:w-[50%]  ">
        <div className="bg-primary-ash p-5 rounded-xl  gap-y-5 flex flex-col ">
            <div className="flex justify-center items-center text-center text-primary-main-blue font-semibold text-[30px]">
            <h3 className="text-center">Redeem Gift Card</h3>{" "}
          </div>

          <div className="">
            <h5 className="text-[20px] mb-1 text-primary-main-blue font-semibold">
              Card Id:
            </h5>
            <input
              type="number"
              className=" w-full p-3 rounded-2xl border border-primary-orange"
              placeholder="Enter Card ID"
            />
          </div>

          <div className="">
            <h5 className="text-[20px] mb-1 text-primary-main-blue font-semibold">
              Redeem Code:
            </h5>
            <input
              type="number"
              className=" w-full p-3 rounded-2xl border border-primary-orange"
              placeholder="Enter Redeem Code"
            />
          </div>

          <div className="">
            <h5 className="text-[20px] mb-1 text-primary-main-blue font-semibold">
              PIN:
            </h5>
            <input
              type="password"
              className=" w-full p-3 rounded-2xl border border-primary-orange"
              placeholder="Enter PIN Code"
            />
          </div>

          <div className="w-[100%] rounded-2xl bg-primary-main-blue text-center cursor-pointer duration-200 hover:opacity-[0.7] text-white py-[20px] font-semibold">
            <p>Redeem Gift Card</p>
          </div>
        </div>
        </div>
        {/* form 2 end */}
      </div>
      {/* forms end */}
    </div>
  );
};

export default page;
