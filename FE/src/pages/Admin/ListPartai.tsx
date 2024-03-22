import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Delete, Edit } from "lucide-react"
import { useEffect, useState } from "react"

export const ListPartai = () => {
    const [partai, setPartai] = useState<Array<any>>([])

    const getPartai = async () => {
        const response = await fetch("http://localhost:4000/api/v1/partai")
        const data = await response.json()
        setPartai(data.data)
    }


    useEffect(() => {
        getPartai()
    }, [])

    const deletePartai = async (id: number) => {
        try {
            await fetch(`http://localhost:4000/api/v1/partai/${id}`, { method: 'DELETE' })
            getPartai()
        } catch (error) {
            throw error
        }
    }



    return (
        <div>
            <Navbar admin={""} />
            <div className="flex flex-col items-center justify-center h-screen">
                <b className="py-20 text-4xl text-fisrt">LIST PARTAI</b>
                <div>
                    <Link to={"/addpartai"} className="text-end"><Button title={"+ Add Partai"} hover={"text-white hover:opacity-80 rounded-md"} /></Link>
                    <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
                        <thead>
                            <tr className="">
                                <th className="px-2 text-center border bg-slate-200 border-slate-300">No. Urut</th>
                                <th className="Table__Header">Logo</th>
                                <th className="Table__Header">Ketua Umum</th>
                                <th className="Table__Header">Visi & Misi</th>
                                <th className="Table__Header">Alamat</th>
                                <th className="Table__Header">Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                partai.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-2 text-center border border-slate-300">{item.no}</td>
                                        <td className="Table__List__Logo"><Link to={"#"} className="flex items-center justify-center py-5"><img src={item.logo} width={"78px"} height={"94px"} alt="" /></Link></td>
                                        <td className="Table__List">{item.ketum}</td>
                                        <td className="Table__List">
                                            <ul>
                                                <li>* {item.visimisi}</li>
                                            </ul>

                                        </td>
                                        <td className="Table__List">
                                            <ul>
                                                <li>* {item.address}</li>
                                            </ul>
                                        </td>
                                        <td className="Table__List">
                                            <div className="flex items-center justify-center space-x-10">
                                                <button className="flex flex-col items-center"><Edit /> Edit</button>
                                                <button className="flex flex-col items-center" onClick={() => deletePartai(item.id)}><Delete /> Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
