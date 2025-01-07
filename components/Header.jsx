import Link from "next/link"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-5 px-10 text-white">
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