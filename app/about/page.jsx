'use client'
import Image from "next/image"
import BookAppointmentButton from "@/components/BookAppointmentButton"
import { motion } from "framer-motion"

const About = () => {
    return (

        <section className="w-screen ">
            {/* row 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 mb-20 px-2 xl:px-20">
                {/* col 1 text */}
                <div className="flex flex-col items-center justify-center mx-auto min-w-[300px] lg:w-[800px] xl:w-[600px]">
                    <h2 className="text-[48px] mb-10 text-luxury border-b-2 border-luxury">About</h2>
                    <p className="text-center text-[14px] sm:text-[18px]">Welcome to <span className="border-b-2 text-luxury border-luxury">Hair by Nadia</span> where expertise meets personalized care. With 26 years of experience in the art of hairstyling, we are passionate about helping our clients look and feel their best.
                        <br />
                        <br />
                        Our services cover all aspects of hair, from precision cuts and color to specialized hair extensions, ensuring every client leaves with a style that suits their unique personality and lifestyle.</p>
                </div>
                {/* col 1 image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
                    className="flex items-center justify-center mt-10">
                    <Image src={'/assets/about-us-main.png'} width={450} height={800} alt="welcome hair style" />
                </motion.div>
            </div>

            {/* row 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 mb-10 min-w-[300px] px-2 xl:px-20">
                {/* col 1 text */}
                <div className="flex flex-col items-center justify-center mx-auto lg:w-[800px] xl:w-[600px] xl:order-2">
                    {/* <h2 className="text-[48px] mb-12 text-luxury border-b-2 border-luxury">About us</h2> */}
                    <p className="text-center text-[18px]">Our founder and lead hair stylist <span className="text-luxury border-b-2 border-luxury">Nadia Garofalo</span> completed a comprehensive apprenticeship and holds multiple professional certifications, demonstrating an unwavering commitment to excellence and continuous learning in the ever-evolving beauty industry.
                        <br />
                        <br />
                        <span>Her passion for hairstyling is matched by her dedication to staying ahead of trends and techniques, ensuring every client receives a personalized experience tailored to their unique vision and style. Nadia's artistry and attention to detail have earned her a reputation for transforming hair into works of art that inspire confidence and elegance.</span>
                    </p>
                </div>
                {/* col 1 image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
                    className="flex items-center justify-center mt-10 xl:mt-0">
                    <Image src={'/assets/about-us-img2.png'} width={550} height={100} alt="welcome hair style" />
                </motion.div>
            </div>

            {/* row 3 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 mb-10 min-w-[300px] px-2 xl:px-20">
                {/* col 1 text */}
                <div className="flex flex-col items-center justify-center mx-auto lg:w-[800px] xl:w-[600px] ">
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
                {/* col 1 image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
                    className="flex items-center justify-center mt-10">
                    <Image src={'/assets/about-us-img3.png'} width={550} height={800} alt="welcome hair style" />
                </motion.div>
            </div>

            {/* final row */}
            <div className="flex flex-col justify-center items-center min-w-[300px] xl:min-w-[400px] xl:mt-20">
                <div className="w-[80%] md:w-[60%] flex items-center justify-center mb-20">
                    <p className="text-[18px] text-center">At <span className="text-luxury border-b-2 border-luxury">Hair by Nadia</span>, we believe that everyone deserves to shine. Whether you're here for a transformative new look or a simple touch-up, our team is dedicated to providing exceptional care, attention to detail, and a little extra confidence in every visit.
                    </p>
                </div>
                <BookAppointmentButton hidden={false} />
            </div>

        </section>
    )
}
export default About