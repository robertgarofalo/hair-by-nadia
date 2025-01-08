'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

//components
import SocialHeader from "./SocialHeader"
import BookAppointmentButton from "./BookAppointmentButton"

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

const Nav = () => {

    const pathname = usePathname()

    return (
        <nav className="flex items-center gap-9">
            {links.map((link, index) => (
                <Link key={index} href={link.path}
                    className={`${link.path === pathname && `text-luxury border-b-2 border-luxury`} font-medium border-b-2 ${link.path !== pathname && 'border-b-transparent'} hover:text-luxury  capitalize transition-all`}
                >
                    {link.name}
                </Link>
            ))}
            <BookAppointmentButton />
            <SocialHeader />
        </nav>
    )
}
export default Nav