import React from 'react'

const page = () => {
    return (
        <div className="pt-[80px] p-[10px] flex justify-center w-full">
            <div className="w-full md:w-[50%] flex flex-col gap-y-5">
      
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
        </div>
    )
}

export default page
