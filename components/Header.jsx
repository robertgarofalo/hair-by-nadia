'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    const pathname = usePathname()
    
    return (
        <header 
        
        className={`${pathname === '/' ? 'absolute' : 'relative'} py-5 px-10 text-white z-20 w-full`}>
            <div className="flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Hair by Nadia</h1>
                </Link>

                {/* desktop view */}
                <div className="hidden lg:flex">
                    {/* nav */}
                    <Nav />
                </div>

                {/* Mobile view */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
export default Header