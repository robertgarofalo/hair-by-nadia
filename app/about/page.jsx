'use client'
import Image from "next/image"
import BookAppointmentButton from "@/components/BookAppointmentButton"
import { motion } from "framer-motion"

const About = () => {
    return (

        <section className=" w-screen px-40">
            {/* row 1 */}
            <div className="grid grid-cols-2 px-32 mb-20">
                {/* col 1 text */}
                <div className="flex flex-col items-center justify-center px-24">
                    <h2 className="text-[48px] mb-20 text-luxury border-b-2 border-luxury">About</h2>
                    <p className="text-center text-[18px]">Welcome to <span className="border-b-2 text-luxury border-luxury">Hair by Nadia</span> where expertise meets personalized care. With 26 years of experience in the art of hairstyling, we are passionate about helping our clients look and feel their best.
                        <br />
                        <br />
                        Our services cover all aspects of hair, from precision cuts and color to specialized hair extensions, ensuring every client leaves with a style that suits their unique personality and lifestyle.</p>
                </div>
                {/* col 2 image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
                    className="flex items-center justify-center">
                    <Image src={'/assets/about-us-main.png'} width={450} height={800} alt="welcome hair style" />
                </motion.div>
            </div>

            {/* row 2 */}
            <div className="grid grid-cols-2 px-32 mb-20">
                {/* col 1 text */}
                <div className="flex flex-col items-center justify-center px-24 order-2">
                    {/* <h2 className="text-[48px] mb-12 text-luxury border-b-2 border-luxury">About us</h2> */}
                    <p className="text-center text-[18px]">Our founder and lead hair stylist <span className="text-luxury border-b-2 border-luxury">Nadia Garofalo</span> completed a comprehensive apprenticeship and holds multiple professional certifications, demonstrating an unwavering commitment to excellence and continuous learning in the ever-evolving beauty industry.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                {/* col 2 image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
                    className="flex items-center justify-center">
                    <Image src={'/assets/about-us-img2.png'} width={550} height={100} alt="welcome hair style" />
                </motion.div>
            </div>

            {/* row 3 */}
            <div className="grid grid-cols-2 px-32 mb-20">
                {/* col 1 text */}
                <div className="flex flex-col items-center justify-center px-24">
                    {/* <h2 className="text-[48px] mb-12 text-luxury border-b-2 border-luxury">About us</h2> */}
                    <p className="text-center text-[18px]">
                        In addition to hairstyling expertise, we have 14 years of experience working with children with disabilities, including Autism Spectrum Disorder (ASD), Cerebral Palsy (CP), and sensory processing disorders.
                        <br />
                        <br />
                        This unique background allows us to create a salon experience that is inclusive, patient, and tailored to meet the needs of every individual.
                        <br />
                        <br />
                        We understand the importance of creating a safe, welcoming environment where clients of all ages and abilities can feel at ease.
                    </p>
                </div>
                {/* col 2 image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
                    className="flex items-center justify-center">
                    <Image src={'/assets/about-us-img3.png'} width={550} height={800} alt="welcome hair style" />
                </motion.div>
            </div>

            {/* final row */}
            <div className="flex flex-col justify-center items-center">
                <div className="w-[60%] flex items-center justify-center mb-20">
                    <p className="text-[18px] text-center">At <span className="text-luxury border-b-2 border-luxury">Hair by Nadia</span>, we believe that everyone deserves to shine. Whether you're here for a transformative new look or a simple touch-up, our team is dedicated to providing exceptional care, attention to detail, and a little extra confidence in every visit.
                    </p>
                </div>
                <BookAppointmentButton />
            </div>

        </section>
    )
}
export default About