import * as React from 'react'
import { Button } from "../components/Button"
import { Input } from "../components/elements/input"
import axios from 'axios'
import { useNavigate, Link, Navigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


export type IAuth = {
    // isAdmin: boolean
    username: string;
    password: string;
};

export const Login = ({ showLogin, change, isLogin }: any) => {

    const [value, setValue] = React.useState<IAuth>({
        username: '',
        password: ''
    })

    const focus: any = React.useRef()

    React.useEffect(() => {
        focus.current.focus()
    }, [])

    const saveLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // await axios.post("http://localhost:4000/api/v1/login", {
            //     username: value.username,
            //     password: value.password
            // });
            addEventListener('submit', showLogin)
            addEventListener('submit', isLogin)
            console.log(value)
        } catch (error) {
            console.log(error);
        }
    };

    const getInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value)
    };
    // const handleUser = () => {
    //     const users = localStorage.getItem("Users")
    //     if (users == null) {
    //         localStorage.setItem("Users", JSON.stringify([{ name: usersRef.current.value, pass: usersPassRef.current.value }]))
    //         window.location.href = "/users"
    //     } else if (users == users) {
    //         const datausers = JSON.parse(users)
    //         datausers.push(localStorage.setItem("Users", JSON.stringify([{ name: usersRef.current.value, pass: usersPassRef.current.value }]))
    //         )
    //         window.location.href = "/users"
    //     }
    // }
    // const handleAdmin = () => {
    //     const admin = localStorage.getItem("Admin")
    //     if (admin == null) {
    //         localStorage.setItem("Admin", JSON.stringify([{ name: adminRef.current.value, pass: adminPassRef.current.value }]))
    //         window.location.href = "/admin"
    //     } else if (admin == admin) {
    //         const dataAdmin = JSON.parse(admin)
    //         dataAdmin.push(localStorage.setItem("Admin", JSON.stringify([{ name: adminRef.current.value, pass: adminPassRef.current.value }]))
    //         )
    //         window.location.href = "/admin"
    //     }
    // }

    const [typePass, setTypePass] = React.useState("password")
    const [showPass, setShowPass] = React.useState(false)

    const handleShowPass = () => {
        setTypePass("text")
        setShowPass(true)
    }

    const handleHiddPass = () => {
        setShowPass(false)
        setTypePass("password")
    }
    return (
        <div className='fixed z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75'>
            <form className={`flex flex-col items-center justify-center`} onSubmit={saveLogin}>
                <div className="w-[350px] bg-white px-10 py-5 rounded-lg">
                    <div className="flex justify-between">
                        <h1 className="my-5 text-3xl font-bold text-fisrt">Login</h1>
                        <button className="my-5 text-3xl font-bold" onClick={showLogin}>X</button>
                    </div>
                    <Input title={"username"} ref={focus} placeHolder={undefined} type={"text"} onchange={getInput} name={"username"} />
                    {/* <Input title={"password"} placeHolder={undefined} type={"text"} onchange={getInput} name={"password"} /> */}
                    <div className="relative">
                        <Input title={"Password"} placeHolder={undefined} type={typePass} onchange={getInput} name={"password"} />
                        <div className="absolute cursor-pointer right-1 top-10">
                            {!showPass ? <Eye onClick={handleShowPass} /> : <EyeOff onClick={handleHiddPass} />}
                        </div>
                    </div>
                    <Button title={"Login"} type='submit' hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} />
                    <p className="flex justify-between">Dont have an account ? <Link to="#" onClick={change} className="text-blue-500">Register</Link></p>
                </div>
            </form>
        </div>
    )
}
