import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Navbar } from "../../components/Navbar"
import { Edit, Delete } from "lucide-react"
import { useEffect, useState } from "react"


export const ListPaslon = () => {
    const [paslon, setPaslon] = useState<Array<any>>([])
    const getPaslon = async () => {
        const response = await fetch("http://localhost:4000/api/v1/paslon")
        const data = await response.json()
        setPaslon(data.data)
        // console.log(paslon)
    }

    useEffect(() => {
        getPaslon()
    }, [])


    const deletePaslon = async (id: number) => {
        try {
            await fetch(`http://localhost:4000/api/v1/paslon/${id}`, { method: 'DELETE' })
            getPaslon()
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            <Navbar admin={""} />
            <div className="flex flex-col items-center justify-center h-screen">
                <b className="py-20 text-4xl text-fisrt">LIST PASLON</b>
                <div>
                    <Link to={"/addpaslon"} className="text-end"><Button title={"+ Add Paslon"} hover={"text-white hover:opacity-80 rounded-md"} /></Link>
                    <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
                        <thead>
                            <tr>
                                <th className="px-2 text-center border bg-slate-200 border-slate-300">No. Urut</th>
                                <th className="Table__Header">Image</th>
                                <th className="Table__Header">Name</th>
                                <th className="Table__Header">Visi & Misi</th>
                                <th className="Table__Header">Koalisi</th>
                                <th className="Table__Header">Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paslon.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-2 text-center border border-slate-300">{item.no}</td>
                                        <td className="border ps-2 pe-8 border-slate-300"><Link to={"#"} className="flex items-center justify-center py-5"><img src={item.image} width={"78px"} height={"94px"} alt="" /></Link></td>
                                        <td className="Table__List">{item.name}</td>
                                        <td className="Table__List">
                                            <ul>
                                                <li>* {item.visimisi}</li>
                                            </ul>

                                        </td>
                                        <td className="Table__List">
                                            <ul>
                                                <li>* {item.koalisi}</li>
                                            </ul>
                                        </td>
                                        <td className="Table__List">
                                            <div className="flex items-center justify-center space-x-10">
                                                <button className="flex flex-col items-center"><Edit /> Edit</button>
                                                <button className="flex flex-col items-center" onClick={() => deletePaslon(item.id)}><Delete /> Delete</button>
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
