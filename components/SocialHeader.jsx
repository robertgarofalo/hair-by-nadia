import Link from "next/link"
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'

const socials = [
    { icon: <FaFacebookF size={20} />, path: '' },
    { icon: <FaInstagram size={20}/>, path: '' },
    { icon: <FaYoutube size={20}/>, path: '' },
]

const SocialHeader = () => {
    return (
        <div className="flex gap-4">
            {socials.map((social, index) => (
                <Link href={social.path}
                    key={index} rel="noopener noreferrer"
                    target="_blank"
                    className="w-9 h-9 border border-luxury rounded-full flex justify-center items-center text-luxury text-base hover:bg-luxury hover:text-white hover:transition-all duration-500"
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}
export default SocialHeader