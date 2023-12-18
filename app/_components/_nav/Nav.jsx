"use client"
import React from "react";
import Link from "next/link"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineNoteAdd,MdOutlineAccountBalanceWallet,MdFileDownloadDone, MdOutlineRocketLaunch   } from "react-icons/md";
import { usePathname } from 'next/navigation'
import { GrTransaction } from "react-icons/gr";

const Nav = () => {
    const pathname = usePathname()

    let navdata =[
        {
            navitem:"Dashboard",
            icon :<LuLayoutDashboard/>,
            path:"/"

        },
        {
            navitem:"Create",
            icon :<MdOutlineNoteAdd/>,
            path:"/create"
            

        },
        {
            navitem:"Redeem",
            icon :<MdOutlineAccountBalanceWallet />,
            path:"/redeem"

        },
        {
            navitem:"Validity",
            icon :<MdFileDownloadDone />,
            path:"/validity"

        },
        {
            navitem:"Explore",
            icon :<MdOutlineRocketLaunch />,
            path:"/explore"

        },
        {
            navitem:"Transaction",
            icon :<GrTransaction/>,
            path:"/transaction"

        },

    ]
  return (
    <nav className="h-[100vh]  py-[10px] sticky left-0 top-0 shadow-md inline-block  px-[10px] justify-between bg-primary-ash">
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center">
          <img
            src="https://icoholder.com/media/cache/ico_logo_view_page/files/img/cba29b818040a4ccd81fe7f057e3e620.png"
            className="w-[70px] h-auto block md:hidden"
            alt="logo"
          />
          <img
            src="	https://mindchain.info/Upload/public/6518789549580.png"
            className="w-[150px] h-auto hidden md:block"
            alt="logo"
          />
        </div>
        <ul className="flex flex-col gap-y-2">
            {
                navdata.map((item,index)=>(

                    <li className="w-[70px]  md:w-[150px]" title={item.navitem}> <Link href={item.path} className={`${pathname === item.path ? "bg-primary-main-blue":"bg-primary-orange"} w-full py-[10px] text-center  bg-primary-orange gap-x-1 text-white rounded-lg flex items-center justify-center duration-200 hover:bg-primary-main-blue`}>{item.icon} <span className="hidden md:block">{item.navitem}</span></Link></li>
                ))
            }
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
