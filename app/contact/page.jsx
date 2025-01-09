"use client"

import { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

import { motion } from "framer-motion"

// email.js
// import emailjs from '@emailjs/browser';

// Api key
// const api_key = process.env.NEXT_PUBLIC_EMAILJS_API_KEY

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: '(+61) 1234 567 890',
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: 'hello@hairbynadia.com.au',
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        // street: '123 main street',
        suburb: 'Brooklyn',
        city: 'Melbourne, Australia',
        address: true
    },
]

const Contact = () => {

    const form = useRef()

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        selectedService: '',
        message: ''
    })
    const [sentMessage, setSentMessage] = useState({
        code: '',
        message: ''
    })

    const [emailSent, setEmailSent] = useState(false)

    const handleSendEmail = async (e) => {
        // e.preventDefault()

        // try {
        //     const res = await emailjs
        //         .sendForm('service_hppmceb', 'template_fpa816f', form.current, {
        //             // publicKey: 'j_ek270Y3MWfxt_VL',
        //             publicKey: api_key,
        //         })

        //     // console.log('res -- ', res)

        //     if (res.status === 200) {
        //         setSentMessage({
        //             code: 200,
        //             message: "Success! Your message has been sent"
        //         })

        //         setUserData({
        //             firstName: '',
        //             lastName: '',
        //             email: '',
        //             phone: '',
        //             selectedService: '',
        //             message: ''
        //         })

        //         // Reset the form elements
        //         form.current.reset();

        //     } else if (res.status === 400) {
        //         setSentMessage({
        //             code: 400,
        //             message: 'Failed! Your message has not been sent! Please try again!'
        //         })

        //     } else {
        //         setSentMessage('Error! Please try again!')
        //     }

        // } catch (error) {
        //     console.log('error sending email -- ', error)
        // }
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.4, ease: 'easeIn' } }}
            className='py-6'>
            <div className="div container mx-auto">
                <div className="flex flex-col items-center xl:flex-row gap-[30px] ">
                    {/* form */}
                    <div className="md:w-[80%] xl:w-[54%] xl:order-2 xl:order-none">
                        <form ref={form} onSubmit={handleSendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl text-center">
                            <h3 className="text-4xl text-luxury">Contact Us</h3>
                            <p className="text-white/60">Want to make abooking or have question to ask?<br /> Fill out the form below and we'll be in touch.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" required placeholder="First name" name="first_name" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
                                <Input type="text" required placeholder="Last name" name="last_name" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                                <Input type="email" required placeholder="Email address" name="email_address" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                <Input type="number" placeholder="Phone Number" name="phone_number" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                            </div>
                            {/* select */}
                            <Select required value={userData.selectedService} onValueChange={(value) => setUserData({ ...userData, selectedService: value })}>
                                <SelectTrigger className="w-full text-primary">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Hair cut">Hair cut</SelectItem>
                                        <SelectItem value="Styling">Styling</SelectItem>
                                        <SelectItem value="Special Occasion">Special Occasion</SelectItem>
                                        <SelectItem value="Hair Extensions">Hair Extensions</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea className="h-[200px]" placeholder="Type your message here" name="message" value={userData.message} onChange={(e) => setUserData({ ...userData, message: e.target.value })} />
                            {/* btn */}
                            <input type="hidden" name="selected_service" value={userData.selectedService} />
                            <Button size="md" className="max-w-40 py-3 bg-luxury ">Send message</Button>
                            {sentMessage.code === 200 && <p className='text-green-500'>{sentMessage.message}</p>}
                            {sentMessage.code === 400 && <p className='text-red-500'>{sentMessage.message}</p>}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-luxury rounded-[6px] flex items-center justify-center">
                                        <div className="text-[28px] ">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        {item.description && <h3 className="text-xl">{item.description}</h3>}
                                        {item.address &&
                                            <>
                                                <h3 className="text-xl">{item.street}</h3>
                                                <h3 className="text-xl">{item.suburb}</h3>
                                                <h3 className="text-xl">{item.city}</h3>
                                            </>
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
export default Contact
