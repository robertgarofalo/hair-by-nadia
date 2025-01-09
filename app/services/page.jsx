'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import BookAppointmentButton from "@/components/BookAppointmentButton"
import PriceGuide from "@/components/PriceGuide"

const Services = () => {

    const services = {
        haircuts: [
            {
                name: 'Basic cut +18',
                duration: '30 mins',
                description: '',
                price: '$50',

            },
            {
                name: 'Kids cuts',
                duration: '30 mins - 1hr',
                description: '12 years and younger',
                price: '$40',

            },
            {
                name: 'Buzz Cut & Skin Fade',
                duration: '30 mins',
                description: '',
                price: '$50',
            },
            {
                name: 'Teen Basic Cut (13+)',
                duration: '30mins - 1 hr',
                description: '',
                price: '$50',
            },
            {
                name: 'Teen Basic Cut (13+)',
                duration: '30mins - 1 hr',
                description: '',
                price: '$50',
            },
            {
                name: 'Teen Basic Cut (13+)',
                duration: '30mins - 1 hr',
                description: '',
                price: '$50',
            },
            {
                name: 'Teen Basic Cut (13+)',
                duration: '30mins - 1 hr',
                description: '',
                price: '$50',
            },
        ],
        styling: [
            {
                name: 'Shampoo + Blow Dry',
                duration: '30 mins',
                description: 'Short to Medium Hair',
                price: '$30',
                from: true
            },
            {
                name: 'Shampoo + Blow Dry',
                duration: '30 mins',
                description: 'Long hair',
                price: '$35',
                from: true
            },
            {
                name: 'Shampoo + Blow Dry',
                duration: '30 mins',
                description: 'Extra long hair',
                price: '$40',
                from: true
            },
            {
                name: 'Wavy style / Iron style',
                duration: '30 mins',
                description: 'Add on',
                price: '$10',
                from: true
            },
        ],
        occasions: [
            {
                name: 'Weddings / Engagements',
                duration: 'Minimum 4 hours',
                description: '',
                price: '$450',
                from: true,
                perPerson: true
            },
        ],
        hairExtensions: [
            {
                name: 'Remy Microbead Weft',
                duration: '30 mins',
                description: '20 inches - Half head (50g)',
                price: '$300',
                from: true
            },
            {
                name: 'Remy Microbead Weft',
                duration: '30 mins',
                description: '20 inches - Full head (100g)',
                price: '$600',
                from: true
            },
            {
                name: 'Remy Microbead Weft',
                duration: '30 mins',
                description: '20 inches - Full head & 1/2 (150g)',
                price: '$950',
                from: true
            },
            {
                name: 'J\'adore Microbead Weft',
                duration: '30 mins',
                description: '20 inches - Half head (50g)',
                price: '$400',
                from: true
            },
            {
                name: 'J\'adore Microbead Weft',
                duration: '30 mins',
                description: '20 inches - Full head (100g)',
                price: '$700',
                from: true
            },
            {
                name: 'J\'adore Microbead Weft',
                duration: '30 mins',
                description: '20 inches - Full head & 1/2 (150g)',
                price: '$1000',
                from: true
            },
        ],
    }

    return (
        <>
            {/* main services section */}
            <section className="flex flex-col w-screen xl:px-40 ">
                {/* heading */}
                <div className="flex flex-row items-center justify-center">
                    <h2 className="text-[48px] inline-block xl:mb-10 text-luxury border-b-2 border-luxury">Services</h2>
                </div>

                {/* intro */}
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:my-10 min-w-[400px] px-2 xl:px-20">
                    {/* col 1 text */}
                    <div className="flex flex-col items-center justify-center mx-auto mt-10 xl:mt-0 lg:w-[800px] xl:w-[600px] order-1 xl:order-2">
                        <p className="text-center text-[18px]"><span className="text-luxury">Hair by Nadia</span> is passionate about helping clients look and feel their best. With a personalized approach and a commitment to excellence, we create beautiful, confidence-boosting results tailored to each individual’s unique style and needs.
                        </p>
                    </div>
                    {/* col 1 image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
                        className="flex items-center justify-center mt-10 xl:mt-0">
                        <Image src={'/assets/services-img1.png'} width={650} height={100} alt="welcome hair style" />
                    </motion.div>
                </div>


                {/* grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
                    <div className="flex flex-col items-center justify-start gap-y-4 px-10 mb-10">
                        <Image src='/assets/icons/scissors.png' width={80} height={80} alt="scissors icon" />
                        <h2 className="text-[30px]">Hair cuts</h2>
                        <p className="text-center">Expertly tailored haircuts to suit your style, personality, and preferences, delivering precision and artistry for men, women and children including children with special needs. </p>
                        {/* <Link href="#hair-cuts">
                        <p className="text-luxury">Read more</p>
                    </Link> */}
                    </div>
                    <div className="flex flex-col items-center justify-start gap-y-4 px-10 ">
                        <Image src='/assets/icons/hair-straightener.png' width={80} height={80} alt="scissors icon" />
                        <h2 className="text-[30px]">Styling</h2>
                        <p className="text-center">Effortless, chic everyday hairstyles designed to match your lifestyle, ensuring you leave the salon with a polished and confident look.</p>

                        {/* <Link href="#styling">
                        <p className="text-luxury">Read more</p>
                    </Link> */}
                    </div>
                    <div className="flex flex-col items-center justify-start gap-y-4 px-10 ">
                        <Image src='/assets/icons/toast.png' width={80} height={80} alt="scissors icon" />
                        <h2 className="text-[30px] text-center">Special Occasions</h2>
                        <p className="text-center">Elegant and stunning hairstyling for weddings, engagements, and special events, crafted to make your big day truly unforgettable. </p>
                        {/* <Link href="#special-occasions">
                        <p className="text-luxury">Read more</p>
                    </Link> */}
                    </div>
                    <div className="flex flex-col items-center justify-start gap-y-4 px-10 ">
                        <Image src='/assets/icons/hair-extensions.png' width={80} height={80} alt="scissors icon" />
                        <h2 className="text-[30px] text-center">Hair Extensions</h2>
                        <p className="text-center">High-quality hair extensions expertly applied for added length, volume, or a dramatic transformation, customized to blend seamlessly with your natural hair.</p>
                        {/* <Link href="#hair-extensions">
                        <p className="text-luxury">Read more</p>
                    </Link> */}
                    </div>
                </div>
            </section>

            {/* price guide section */}
            <div className="w-screen bg-white h-screen grid grid-cols-1 xl:grid-cols-2">
                {/* col 1 */}
                <div className="flex flex-col items-center px-[50px] md:px-[150px]">
                    <h1 className="text-luxury text-[48px] mt-10 mb-5 border-b-2 border-luxury">Price guide</h1>
                    <p className="text-primary md:w-[70%] text-center">Explore our competitive pricing tailored to suit your unique needs, ensuring exceptional quality and value</p>

                    {/* Tabs */}
                    <div className="">
                        <Tabs
                            defaultValue="haircuts"
                            className='flex flex-col mt-10'
                        >
                            <TabsList className="flex flex-row sm:w-full sm:gap-6 mb-10">
                                <TabsTrigger value='haircuts'>Hair Cuts</TabsTrigger>
                                <TabsTrigger value='styling'>Styling</TabsTrigger>
                                <TabsTrigger value='occasions'>Occasions</TabsTrigger>
                                <TabsTrigger value='hair-extensions'>Hair Extensions</TabsTrigger>
                            </TabsList>

                            {/* content */}
                            <div className='w-full'>
                                {/* haircuts */}
                                <TabsContent value="haircuts" className="w-full">
                                    {/* type=always shows scroll bar always visible */}
                                    <ScrollArea type="always" className="w-full h-[400px]">
                                        <PriceGuide data={services.haircuts} />
                                    </ScrollArea>
                                </TabsContent>

                                {/* styling */}
                                <TabsContent value="styling" className="w-full">
                                    <ScrollArea type="always" className="w-full h-[400px]">
                                        <PriceGuide data={services.styling} />
                                    </ScrollArea>
                                </TabsContent>

                                {/* occasions */}
                                <TabsContent value="occasions" className="w-full">
                                    <ScrollArea type="always" className="w-full h-[400px]">
                                        <PriceGuide data={services.occasions} />
                                    </ScrollArea>
                                </TabsContent>

                                {/* hair extensions */}
                                <TabsContent value="hair-extensions" className="w-full">
                                    <ScrollArea type="always" className="w-full h-[400px]">
                                        <PriceGuide data={services.hairExtensions} />
                                    </ScrollArea>
                                </TabsContent>

                            </div>

                            {/* book button */}
                            <div className="mt-10 flex flex-row items-center justify-center">
                                <BookAppointmentButton hidden={false} />
                            </div>
                        </Tabs>
                    </div>

                </div>


                {/* col 2 */}
                <div className="hidden xl:flex relative">
                    <Image src='/assets/about-us-main.png' layout="fill" objectFit="cover" alt="main" />
                </div>
            </div>

        </>
    )
}
export default Services

// https://dahzthemes.com/kitring/what-we-do/#
// Hair cuts
// everyday styling
// weddings and special occasions
// hair extensions


// https://www.kishair.com.au/salon-price-list