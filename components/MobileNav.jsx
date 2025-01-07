"use client"
import { useState } from 'react'
import Link from "next/link"

import { RiMenu3Fill, RiCloseCircleLine, RiCloseFill } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetClose,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import SocialHeader from "./SocialHeader";

const links = [
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'gallery',
        path: '/gallery'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <RiMenu3Fill className="text-[28px] text-luxury" />
            </SheetTrigger>
            <SheetContent className='w-full flex flex-col items-center justify-between bg-elegant border-l-elegant [&>button:last-child]:hidden'>

                {/* sheet title removes error */}
                <SheetTitle className="hidden" />


                <div className='flex items-center justify-between w-full'>
                    <Link href='/' onClick={() => setIsOpen(false)}>
                        <h1 className="text-4xl font-semibold hover:text-luxury transition-all duration-400">Hair by Nadia</h1>
                    </Link>
                    <SheetClose asChild>
                        <RiCloseFill className='w-7 h-7 cursor-pointer hover:text-luxury transition-all duration-400' />
                    </SheetClose>
                </div>

                <nav className="flex flex-col gap-14 text-3xl">
                    {links.map((link, index) => (
                        <Link href={link.path} key={index} onClick={() => setIsOpen(false)}
                            className='mx-auto hover:text-luxury hover:border-b-2 hover:border-luxury'
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <SocialHeader />
            </SheetContent>
        </Sheet>

    )
}
// <RiMenu3Fill />

export default MobileNav