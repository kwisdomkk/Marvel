import { IoMenu } from "react-icons/io5";
import { motion,AnimatePresence} from 'framer-motion';
import { useState } from 'react';

export default function MobileMenu() {
    const [mobileOpen,setMobileOpen]=useState(false);
  return(<div className="block md:hidden">
     {/* 모바일일때 보여지는 메뉴 */}
     <div onClick={()=>setMobileOpen(true)} className="block md:hidden text-2xl px-2 cursor-pointer" ><IoMenu /></div>
     <div className="z-50 fixed left-0 top-0 bottom-0 flex w-full h-screen bg-main-dark"></div>
  </div>;
  )
}
