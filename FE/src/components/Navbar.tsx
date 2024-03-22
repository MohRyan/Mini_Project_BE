import { Link } from "react-router-dom"
import logo from "../assets/images/logo-merah.svg"
import { Button } from "./Button"
import { Sandwich } from "lucide-react"
import { useState } from "react"
import { Login } from "@/pages/Login"
import { Register } from "@/pages/Register"



export const Navbar = (props: { admin?: "hidden" | "", users?: "hidden" | "" }) => {
    const { admin = "hidden", users = "hidden" } = props
    const [navbarMobile, setNavbarMobile] = useState<Boolean>(false)
    const [isLogin, setIsLogin] = useState<Boolean>(false)
    const [login, setLogin] = useState<Boolean>(false)
    // const [isRegister, setIsRegister] = useState<Boolean>(false)
    // const [register, setRegister] = useState<Boolean>(false)

    const [showLogin, setShowLogin] = useState<Boolean>(false)
    const [showRegister, setShowRegister] = useState<Boolean>(false)

    const handleShowLogin = () => {
        setShowLogin(!showLogin)
    }

    const handleShowRegister = () => {
        setShowRegister(!showRegister)
    }

    const handleChange = () => {
        setShowLogin(!showLogin)
        setShowRegister(!showRegister)
    }


    const handleNavbar = () => {
        setNavbarMobile(!navbarMobile)
    }

    const handleIsLogin = () => {
        setIsLogin(!isLogin)
        setLogin(!login)
    }

    return (
        <div className="Nav__">
            {
                !showLogin ? '' : <Login showLogin={handleShowLogin} isLogin={handleIsLogin} change={handleChange} />
            }
            {
                !showRegister ? '' : <Register showRegister={handleShowRegister} showLogin={handleShowLogin} change={handleChange} />
            }

            <div className="flex lg:container w-full justify-between h-[64px]">
                <div className="flex items-center">
                    <Link to={"/"}><img src={logo} alt="" className={`ps-5 md:ps-0 ${users}`} /></Link>
                    <Link to={"/admin"}><img src={logo} alt="" className={`pspace-y-3s-5 md:ps-0 ${admin}`} /></Link>
                    <p className={`md:text-white ps-3 font-bold md:text-sm text-black text-xl ${users}`}>PEMILU PRESIDEN DUMWAYS.ID</p>
                    <p className={`text-white ps-3 font-bold text-xl ${admin}`}>DASHBOARD PEMILU</p>
                </div>
                <div className="flex justify-center py-5 cursor-pointer lg:hidden">
                    {
                        !navbarMobile ? <Sandwich onClick={handleNavbar} className="text-white duration-1000 hover:text-red-700" /> : <Sandwich onClick={handleNavbar} className="text-red-500 duration-1000 scale-125 rotate-180 hover:text-red-700" />
                    }
                </div>
                {/* Nav Mobile =============================== */}
                <div className={`${navbarMobile ? "-translate-y-0" : "-translate-y-[140%]"} lg:hidden fixed left-0 z-10 duration-1000 flex-col bg-black top-16`}>
                    <ul className={`flex ${users} cursor-pointer flex-col text-white font-bold border-y-2 bg-slate-400`}>
                        <Link to="/home"><li className="Nav__List__Mobile">Dashboard</li></Link>
                        <li className="Nav__List__Mobile"><Link to="#">Partai</Link></li>
                        <li className="Nav__List__Mobile"><Link to="#">Paslon</Link></li>
                        <Link to="/vote"><li className="Nav__List__Mobile">Voting</li></Link>
                    </ul>
                    <ul className={`flex ${admin} cursor-pointer flex-col text-white font-bold border-y-2 bg-slate-400`}>
                        <Link to="/admin"><li className="Nav__List__Mobile">Dashboard</li></Link>
                        <Link to="/listpartai"><li className="Nav__List__Mobile">List Admin</li></Link>
                        <Link to="/listpartai"><li className="Nav__List__Mobile">List Users</li></Link>
                        <Link to="/listpartai"><li className="Nav__List__Mobile">Partai</li></Link>
                        <Link to="/listpaslon"><li className="Nav__List__Mobile">Paslon</li></Link>
                    </ul>
                    <div className="w-screen">
                        <div className={`${users}`}>
                            <Button bg={"bg-white w-full"} hover={"hover:bg-red-700 hover:text-white"} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 text-white"} onClick={handleIsLogin} hover={"hover:bg-second w-full"} title={"LogOut"} /></Link>
                        </div>
                        <div className={`${admin}`}>
                            <Button bg={"bg-white w-full"} hover={`hover:bg-red-700 hover:text-white`} title={"Moh Ryan"} />
                            <Link to="#"><Button bg={"bg-red-700 text-white"} onClick={handleIsLogin} hover={"hover:bg-second w-full"} title={"LogOut"} /></Link>
                        </div>
                    </div>
                </div>
                {/* Nav Mobile =============================== */}

                <div className="items-center hidden lg:flex">
                    <ul className={`${users} flex Nav__List`}>
                        <li><Link to="#">Partai</Link></li>
                        <li>|</li>
                        <li><Link to="#">Paslon</Link></li>
                        <li>|</li>
                        <li><Link to="/vote">Voting</Link></li>
                    </ul>
                    <ul className={`${admin} flex Nav__List`}>
                        <li><Link to="/listadmin">List Admin</Link></li>
                        <li>|</li>
                        <li><Link to="/listusers">List Users</Link></li>
                        <li>|</li>
                        <li><Link to="/listpartai">Partai</Link></li>
                        <li>|</li>
                        <li><Link to="/listpaslon">Paslon</Link></li>
                        <li>|</li>
                        <li><Link to="/addarticle">Add Article</Link></li>
                    </ul>
                    <div>
                        {
                            !isLogin ? <div className="flex space-x-3">
                                <Button bg={"bg-white rounded-md"} onClick={handleShowRegister} hover={"hover:bg-red-700 hover:text-white"} title={"Register"} />
                                <Button bg={"bg-second rounded-md"} onClick={handleShowLogin} hover={"hover:bg-red-700 text-white"} title={"Login"} />
                            </div> : <div>
                                <div className={`flex ${users}`}>
                                    <Button bg={"bg-white rounded-s-full"} hover={"hover:bg-red-700 hover:text-white"} title={"Moh Ryan Khalifatul Huda"} />
                                    <Link to="#"><Button bg={"bg-red-700 ms-3 text-white"} onClick={handleIsLogin} hover={"hover:bg-second"} title={"LogOut"} /></Link>
                                </div>
                                <div className={`flex ${admin}`}>
                                    <Button bg={"bg-white rounded-full"} hover={`hover:bg-red-700 hover:text-white`} title={"Moh Ryan"} />
                                    <Link to="#"><Button bg={"bg-red-700 ms-3 text-white"} onClick={handleIsLogin} hover={"hover:bg-second"} title={"LogOut"} /></Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
