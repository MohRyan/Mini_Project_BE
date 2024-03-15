



export const NoPaslon = () => {
    const noPaslon = [
        {
            no: "3",
            name: "CINTARA SURYA PALOH",
            vote: "63%",
            bg: "bg-[#FF6384]",
            bgNo: "bg-[#5E0000]",
            text: "text-[#5E0000]"
        },
        {
            no: "1",
            name: "SURYA SURYA",
            vote: "22%",
            bg: "bg-[#FFCD56]",
            bgNo: "bg-[#5E5400]",
            text: "text-[#5E5400]"
        },
        {
            no: "2",
            name: "CINTARA",
            vote: "15%",
            bg: "bg-[#36A2EB]",
            bgNo: "bg-[#005E4D]",
            text: "text-[#005E4D]"
        },
    ]
    return (
        <div>
            {
                noPaslon.map(item => (
                    <div key={item.no} className={`lg:flex max-w-[496px] m-2 px-4 lg:py-0 py-4 rounded-lg items-center ${item.bg}`}>
                        <div>
                            <div className={`rounded-md ring-1 p-5 lg:w-20 ring-white ${item.bgNo}`}>
                                <p className="flex flex-col items-center justify-center text-center text-white">No. Paslon <span className="text-4xl font-bold">{item.no}</span></p>
                            </div>
                        </div>
                        <div className={`p-10 ${item.text} w-full font-bold text-center text-5xl stroke`}>
                            <p className="lg:text-4xl">{item.name}</p>
                            <p>{item.vote}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
