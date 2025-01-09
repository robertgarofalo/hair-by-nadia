const PriceGuide = ({ data }) => {
    return (
        <>
            {data.map((service, index) => (
                <div key={'service_' + index} className="flex flex-row justify-between mb-10 mx-4 border-2 p-5 rounded-xl">
                    {/* name and duration*/}
                    <div className="text-primary">
                        <h2 className="text-[24px]">{service.name}</h2>
                        <p className="text-[15px] mt-[-10px] text-primary/60">{service.duration}</p>
                    </div>
                    {/* price */}
                    <div className="text-primary">
                        <p className="text-[30px]">{service.price}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default PriceGuide