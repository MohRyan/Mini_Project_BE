import logo from "../assets/images/logo-merah.svg"

export const Footer = () => {
    return (
        <div className="flex flex-col py-5 bg-black">
            <div className="flex items-center justify-start w-full px-20 py-12 ">
                <img src={logo} width={"110px"} height={"110px"} alt="" />
                <div className="text-white ms-3 w-[500px] ">
                    <p className="text-xl font-bold md:text-3xl">DUMBWAYS.ID</p>
                    <p className="md:text-xl text-md text-wrap">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                </div>
            </div>
            <div className="w-screen h-1 bg-white"></div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-lg text-white">Komisi Pemilihan Umum Dumbways.ID | yourname 2023</p>
            </div>
        </div >
    )
}
