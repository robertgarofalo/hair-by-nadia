import { Button } from "@/components/ui/button"
import Link from "next/link"

const BookAppointmentButton = ({ hidden = true }) => {
    return (
        <div className={`${hidden && 'hidden'} lg:flex items-center gap-8`}>
            <Link href="/">
                <Button className="bg-luxury border-2 border-transparent hover:bg-transparent hover:bg-[#786058]">Book Appointment</Button>
            </Link>
        </div>
    )
}
export default BookAppointmentButton