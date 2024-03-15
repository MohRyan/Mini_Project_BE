import paslonImage from "../../assets/images/paslon.png"
import dataPaslon from "../../Json/paslon.json"
import { Button } from "../../components/Button"

export const Modal = ({ show, handleSudah, handleShow }: any) => {
    return (
        <>
            <div className={`fixed z-50 ${!show ? "hidden" : "flex"} flex-col items-center justify-center lg:h-screen w-screen bg-black bg-opacity-50`}>
                <div className="relative flex flex-col items-center h-screen px-20 py-10 mt-5 overflow-auto bg-white rounded-lg md:px-32 lg:px-10 lg:mt-0 lg:h-auto">
                    <b className="py-5 text-4xl text-center text-fisrt">MASUKAN PILIHAN MU</b>
                    <b className="absolute text-5xl font-bold cursor-pointer top-5 right-10" onClick={handleShow}>x</b>
                    <div className="flex flex-col items-center space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row ">
                        {
                            dataPaslon.map((item) => (
                                <button key={item.no} className="relative flex flex-col p-5 rounded-lg w-80 bg-slate-300 group/modal hover:bg-yellow-200 focus:bg-yellow-200">
                                    <div className={`Modal__Paslon`}><b className="text-4xl text-white">{item.no}</b></div>
                                    <div className="w-full group-hover/modal:border-4 group-hover/modal:border-red-600 group-focus/modal:border-4 group-focus/modal:border-red-600 h-52">
                                        <img src={paslonImage} className="object-cover w-full h-full rounded-sm" alt="" />
                                    </div>
                                    <b className={`text-xl ${item.text}`}>{item.name}</b>
                                    <p>{item.vimis}</p>
                                    <b>Partai Pengusung</b>
                                    {item.koalisi.map(partai => (
                                        <ul key={partai.partai}>
                                            <li>* {partai.partai}</li>
                                        </ul>
                                    ))}
                                </button>
                            ))
                        }
                    </div>
                    <div className="lg:flex lg:space-x-11">
                        <Button title="Reset" hover="w-80 rounded-lg text-fisrt text-2xl hover:opacity-40" bg="border-4 border-fisrt" />
                        <Button onClick={handleSudah} title="Submit" hover="w-80 rounded-lg text-white text-2xl border-4 border-fisrt hover:opacity-40" />
                    </div>
                </div>
            </div>
        </>
    )
}
