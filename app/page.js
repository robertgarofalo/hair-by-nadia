'use client' // screen 393px

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {

  const pathname = usePathname()

  const isHomePage = pathname === '/'

  return (
    <>
      {/* Disable scroll only on the first page */}
      {isHomePage && (
        <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
      )}


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.4, ease: 'easeIn' } }}
        className="absolute bg-[url('/assets/hair-mono.jpg')] bg-cover bg-center w-screen h-screen">

        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* content */}
        <div className="h-screen flex flex-col items-center justify-center relative z-10">
          <h1 className="font-primary text-center text-[70px] md:text-[100px] xl:text-[178px] ">Hair by Nadia</h1>

          {/* button */}
          <button onClick={() => alert('Booking screen')} className="xl:hidden text-[18px] border-b-2 border-b-transparent hover:border-b-2 hover:border-luxury hover:text-luxury transition-all duration-900">Book Appointment</button>
        </div>
      </motion.div>
    </>
  );

}
