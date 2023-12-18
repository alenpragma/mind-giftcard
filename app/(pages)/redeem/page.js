import React from 'react'

const Redeem = () => {
    return (
        <div className="pt-[80px] p-[10px] w-full flex justify-center">
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
        </div>
    )
}

export default Redeem
