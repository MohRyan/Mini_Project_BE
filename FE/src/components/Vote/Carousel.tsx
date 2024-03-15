import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import dataPaslon from "../../Json/paslon.json"
import paslon from "../../assets/images/paslon.png"



export const CarouselVote = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className="flex flex-col items-center justify-center w-screen py-52 bg-slate-300 px-96">
            <Carousel setApi={setApi} className="flex items-center justify-center ">
                <CarouselContent>
                    {dataPaslon.map((item) => (
                        <CarouselItem key={item.no} className="relative flex items-center justify-center">
                            <div className="relative flex object-contain p-5 bg-white rounded md:p-10">
                                <div>
                                    <img src={paslon} alt="" className="object-contain" />
                                </div>
                                <div className="ms-5">
                                    <b>Nomor Urut {item.no}</b>
                                    <p className={`${item.text} text-2xl font-bold`}>{item.name}</p>
                                    <div>
                                        <p className="mb-2">Visi & Misi :</p>
                                        {
                                            item.vimi.map(vimi => (
                                                <ul key={vimi.title}>
                                                    <li><b>*</b> {vimi.title}</li>
                                                </ul>
                                            ))
                                        }
                                        <p className="mb-2">Koalisi :</p>
                                        {
                                            item.koalisi.map(koalisi => (
                                                <ul key={koalisi.partai}>
                                                    <li><b>*</b> {koalisi.partai}</li>
                                                </ul>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute z-20 md:static md:-top-10 -top-5 sm:left-11 left-20">
                    <CarouselPrevious />
                </div>
                <div className="absolute z-20 md:static md:-bottom-10 -bottom-5 sm:right-11 right-20">
                    <CarouselNext />
                </div>
            </Carousel>
            <div className="w-screen py-10 text-2xl text-center text-muted-foreground">
                Calon ke {current} Dari {count} Calon
            </div>
        </div>
    )
}
