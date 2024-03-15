import { Link } from "react-router-dom"
import sampleFoto from "../assets/images/sampleFoto.png"
import { Button } from "./Button"
import article from "../Json/article.json"


export const Article = () => {
    return (
        <div className="flex items-center justify-center w-screen pt-10 ">
            {article.map((item) => (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1024px]">
                    <Link to={`/detail${item.id}`} className="relative z-0 mb-2 lg:me-1 md:col-span-2">
                        <div className="relative z-0 min-w-[250px] min-h-[250px]">
                            <img src={sampleFoto} height={""} className="object-cover w-full max-lg:h-80" alt="" />
                            <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-t from-black"></div>
                            <div className="absolute bottom-0 z-20 pb-5 ps-5">
                                <Button hover={"hover:bg-white hover:text-second"} bg={"bg-second text-white rounded-sm"} title={item.tanggal} />
                                <p className="text-xl font-bold text-white md:text-2xl">{item.title}</p>
                                <p className="text-2xl text-white">{item.admin}</p>
                            </div>
                        </div>
                    </Link>
                    {item.sub.map(sub => (
                        <Link to={`/detail${sub.id}`} className="flex flex-col items-center justify-center pb-5 mb-2 bg-white shadow-md sm:col-span-1 md:me-1">
                            <img src={sampleFoto} alt="" className="lg:h-full" />
                            <div className="flex flex-col items-center w-full">
                                <Button hover={"hover:bg-red-600 hover:shadow-xl"} bg={"bg-second text-white rounded-sm"} title={sub.tanggal} />
                                <p className="text-lg font-bold">{sub.title}</p>
                                <p className="text-lg">{sub.admin}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}



        </div>
    )
}
