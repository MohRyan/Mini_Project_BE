import { Navbar } from "../../components/Navbar"
import paslon from "../../assets/images/paslon.png"
import Paslon from "../../Json/paslon.json"
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { useGet } from "@/lib/useFetch"
import axios from 'axios'


const listTable = [
    {
        no: "1",
        name: "Sugeng No Pants",
        addres: "Cileungsi",
        gender: "Laki-Laki",
        paslon: "Paloh",
    },
    {
        no: "2",
        name: "Haris Gams",
        addres: "Serang",
        gender: "Perempuan",
        paslon: "Surya",
    },
    {
        no: "3",
        name: "Aziz Union",
        addres: "Bekasi",
        gender: "Laki-Laki",
        paslon: "Cintara",
    },
    {
        no: "4",
        name: "Lae Tanjung Balai",
        addres: "Tanjung Balai",
        gender: "Laki-Laki",
        paslon: "Paloh",
    }

]

// const [data, setData] = useState()


export const DashBoard = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        useGet("http://localhost:4000/api/v1/users/user", setData)
        console.log(data)
    }, [])
    return (
        <div className="flex flex-col items-center">
            <Navbar admin={""} />
            <div className="flex w-[1440px] flex-col items-center justify-center pt-10">
                <div className="flex flex-col items-center mb-5 lg:py-20">
                    <b className="py-10 text-4xl text-fisrt">DASHBOARD</b>
                    {data.map((item: { id: any; firstName: any }) => (
                        <h1 key={item.id}>{item.firstName}</h1>
                    ))}
                    <div className="flex flex-col items-center justify-center w-full h-auto lg:flex-row">
                        {Paslon.map(item => (
                            <div className="flex flex-col items-center justify-center w-full mx-4">
                                <div className={`flex items-center justify-center rounded-full w-20 h-20 bg-${item.bg2} my-5`}>
                                    <div className={`flex items-center justify-center rounded-full w-16 h-16 bg-${item.bg1}`}>
                                        <b className={`text-3xl ${item.text}`}>{item.no}</b>
                                    </div>
                                </div>
                                <div className={`flex flex-col h-[433px] px-9 py-5 bg-${item.bg1} text-wrap rounded-lg shadow-md`}>
                                    <img src={paslon} className="w-[330px] h-[262px]" alt="" />
                                    <div className={`${item.text} font-black w-[330px]`}>
                                        <p className="text-4xl stroke">{item.name}</p>
                                        <p className="text-xl stroke_sm">Akumulasi : {item.akumulasi}</p>
                                        <p className="text-xl stroke_sm">Jumlah Vote : {item.vote} Voters</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-screen py-10 overflow-auto bg-slate-300">
                    <b className="my-5 text-4xl text-fisrt">LIST OVER</b>
                    <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
                        <thead className="">
                            <tr className="table-row bg-white">
                                <th className="p-3 text-center border bg-slate-200 border-slate-300">No</th>
                                <th className="Table__Header">Nama</th>
                                <th className="Table__Header">Alamat</th>
                                <th className="Table__Header">Jenis Kelamin</th>
                                <th className="Table__Header">Paslon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listTable.map(item => (
                                <tr className="bg-white">
                                    <td className="py-2 text-center border border-slate-300">{item.no}</td>
                                    <td className="Table__List">{item.name}</td>
                                    <td className="Table__List">{item.addres}</td>
                                    <td className="Table__List">{item.gender}</td>
                                    <td className="Table__List">{item.paslon}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <b className="my-5 text-3xl">TOTAL SUARA TERKUMPUL : 1350 Voters</b>
                </div>
            </div>
        </div>
    )
}
