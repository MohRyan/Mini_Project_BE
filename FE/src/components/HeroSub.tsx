import { Button } from "./Button"
import sampleFoto from "../assets/images/sampleFoto.png"
import { Link } from "react-router-dom"


export const HeroSub = () => {
    return (
        <Link to="/detail">
            <div className="h-[421px] bg-white">
                <img src={sampleFoto} alt="" className="" />
                <div className="ps-5 mt-5">
                    <Button hover={"hover:bg-white hover:text-second hover:shadow hover:ring hover:ring-black"} bg={"w-[250px] bg-second text-white rounded-sm my-1 mr-32"} title={"Senin 03 Januari 2023"} />
                    <p className="font-bold text-2xl">KPU TETAPKAN 3 MENTOR TERBAIK</p>
                    <p className=" text-xl">Super Admin</p>
                </div>
            </div>
        </Link>
    )
}
