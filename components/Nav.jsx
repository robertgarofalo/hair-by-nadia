'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

//components
import SocialHeader from "./SocialHeader"

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
        <nav className="flex gap-9">
            {links.map((link, index) => (
            <Link key={index} href={link.path} 
            className={`${link.path === pathname && `text-luxury border-b-2 border-luxury`} font-medium hover:text-luxury hover:border-luxury hover:border-b-2 capitalize transition-all`}
            >
                {link.name}
            </Link>
        ))}
        <SocialHeader />
        </nav>
    )
}
export default Nav