import { Navbar } from "@/components/Navbar"
import { NoPaslon } from "@/components/Vote/NoPaslon"
import { Button } from "@/components/Button"
import { Motto } from "@/components/Motto"
import { Footer } from "@/components/Footer"
import { useState } from "react"
import { PieCart } from "@/components/Vote/PieCart"
import { CarouselVote } from "@/components/Vote/Carousel"
import { Modal } from "@/components/Vote/Modal"





export const Vote = () => {
    const [show, setShow] = useState<boolean>(false)
    const [sudah, setSudah] = useState<boolean>(false)

    const handleShow = () => {
        setShow(!show)
    }
    const handleSudah = () => {
        setSudah(!sudah)
        setShow(!show)
    }

    return (
        <div className="">
            <Navbar users={""} />
            {/* ///////////// Modal Paslon ////////////// */}
            <Modal show={show} handleSudah={handleSudah} handleShow={handleShow} />
            {/* ///////////// Modal Paslon ////////////// */}
            <div className="flex flex-col items-center justify-center w-screen pt-20">
                <p className="py-5 my-5 text-4xl font-bold text-fisrt">INFO PEMILU TERUPDATE</p>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 py-10 lg:grid-cols-2">
                        <div className="">
                            <PieCart />
                        </div>
                        <div className="text-center">
                            <NoPaslon />
                            {
                                !sudah ? <Button onClick={handleShow} title={"MASUKAN SUARAMU"} hover={"text-white px-32 hover:opacity-80"} /> : <p className="py-10 text-3xl font-bold text-red-600">Anda Sudah Memilih !!!!!!!</p>
                            }
                        </div>
                    </div>
                </div>
                <CarouselVote />
                <Motto red={""} />
            </div>
            <Footer />
        </div>
    )
}
