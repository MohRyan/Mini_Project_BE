import { Button } from "./Button"
import sampleFoto from "../assets/images/sampleFoto.png"




export const Hero = () => {
    return (
        <div>
            <img src={sampleFoto} className="object-cover " alt="" />
            <div className="bg-gradient-to-t from-black absolute z-10 w-[753px] h-[421px] bottom-9"></div>
            <div className="ps-5">
                <Button hover={"hover:bg-white hover:text-second w-[240px]"} bg={"bg-second text-white rounded-sm absolute bottom-32 left-5 z-20"} title={"Senin 03 Januari 2023"} />
            </div>
            <p className="absolute bottom-20 text-white font-bold text-2xl ps-5 z-20">KPU TETAPKAN 3 MENTOR TERBAIK</p>
            <p className="absolute bottom-14 text-white text-2xl ps-5 z-20">Super Admin</p>
        </div>
    )
}
