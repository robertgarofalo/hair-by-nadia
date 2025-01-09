const PriceGuide = ({ data }) => {
    return (
        <>
            {data.map((service, index) => (
                <div key={'service_' + index} className="flex flex-row justify-between mb-10 mx-4 border-2 p-5 border-luxury rounded-xl">
                    {/* name and duration*/}
                    <div className="text-primary">
                        <h2 className="text-[24px]">{service.name}</h2>
                        <p className="text-[16px] mt-[-10px] text-luxury">{service.description}</p>
                        <p className="text-[14px] mt-[-5px] text-primary/60">{service.duration}</p>
                    </div>
                    {/* price */}
                    {/* <div className="text-primary">
                        <p className="text-[30px] text-luxury border-b-2 border-luxury">
                            {service.from && <span className="text-[14px]">From</span>}
                            {service.price}
                        </p>
                    </div> */}
                    <div className="text-primary flex flex-col items-center">
                        <div className="flex flex-row">
                            {service.from && <p className="text-[12px] md:text-[14px] mr-1 text-luxury">From</p>}
                            <p className="text-[18px] md:text-[26px] text-luxury border-b-2 border-luxury leading-none">{service.price}</p>
                        </div>
                        {service.perPerson && <p className="text-[12px] mt-2 text-luxury">per person</p>}
                    </div>
                </div>
            ))}
        </>
    )
}
export default PriceGuide