import { ArrowLeft, ArrowRight } from "lucide-react"
import paslon from "../../assets/images/paslon.png"
import dataPaslon from "../../Json/paslonVote.json"
import { useState } from "react"

// Visi & Misi :
// Memindahkan Indonesia ke Isekai.
// Nonton anime 3x sehari.
// Melakukan peresapan pada budaya jepang.

// Koalisi :
// Partai Persatuan Wiboo.
// Partai Redbull.
// Partai Black Magic.


export const Paslon = () => {
    const [index, setIndex] = useState(0)

    const handleArrow = (direction: string) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
        console.log(dataPaslon.length)

    }
    return (
        <div className="flex items-center justify-center h-screen bg-slate-300">
            <b className="text-3xl text-fisrt">INFO PASLON</b>
            <ArrowLeft size={64} className="absolute z-10 object-contain cursor-pointer left-[500px]" onClick={() => handleArrow("l")} />
            <ArrowRight size={64} className="absolute right-[500px] z-10 object-contain cursor-pointer" onClick={() => handleArrow("r")} />
            <div className="flex items-center justify-center h-full duration-1000 ease-linear" style={{ transform: `translateX(${-100 * index}vw)` }}>
                {dataPaslon.map((item) => (
                    <div key={item.no} className=" relative flex items-center justify-center w-screen h-full left-[900px]">
                        <div className="bg-white relative flex w-[700px] object-contain rounded mx-5 p-10">
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
                    </div>
                ))}
            </div>
        </div>
    )
}
