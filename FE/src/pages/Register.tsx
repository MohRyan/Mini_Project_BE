// import { useState } from "react"
import * as React from "react"
import { Button } from "../components/Button"
import { Input } from "../components/elements/input"
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import { Select } from "@/components/elements/Select/Select";
import { Eye, EyeOff, User, UserCheck, X } from "lucide-react";

export const Register = ({ showRegister, change }: any) => {
    const [value, setValue] = React.useState<Array<any>>([{
        fullName: '',
        gender: '',
        username: '',
        password: '',
        role: '',
        profile: ''
    }])
    const [profile, setProfile] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4ZvG6kkUq9wU8FghMw3kL6yxj6CiAVNTqC6mfxF8bg&s")
    const [role, setRole] = React.useState(<User />)
    const [showInputProfile, setShowInputProfile] = React.useState(false)
    // const [profileMale, setProfileMale] = React.useState("")
    // const [profileFemale, setProfileFemale] = React.useState("")

    const focus: any = React.useRef()
    const profileRef: any = React.useRef()

    const Profile = () => {
        setShowInputProfile(!showInputProfile)
    }

    const closeProfile = () => {
        setProfile(profile)
        setShowInputProfile(!showInputProfile)
    }

    const setImageProfile = () => {
        const image = profileRef.current.value
        setProfile(image)
        setShowInputProfile(!showInputProfile)
    }

    React.useEffect(() => {
        focus.current.focus()
    }, [])
    // const navigate = useNavigate();

    const saveRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // await axios.post("http://localhost:4000/api/v1/register", value);
            // console.log(value)
            const users = focus.current.value
            alert(`${users} anda sudah berhasil mendaftar.....`)
            // if(confirm)
            addEventListener('submit', change)
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
        if (e.target.value === "admin") {
            setRole(<UserCheck />)
        }
        if (e.target.value === "user") {
            setRole(<User />)
        }
        if (e.target.value === "pria") {
            setProfile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4eMoz7DH8l_Q-iCzSc1xyu_C2iryWh2O9_FcDBpY04w&s")
        }
        if (e.target.value === "wanita") {
            setProfile("https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Person-icon-vector-female-user-profile-Graphics-1-1-580x387.jpg")
        }

        console.log(e.target.value)

    };

    // Option Register => gender dan role

    const gender = [
        { title: "Pilih Gender", value: "" },
        { title: "Pria", value: "pria" },
        { title: "Wanita", value: "wanita" }
    ]

    const optionRole = [
        { title: "Pilih Rolenya", value: "" },
        { title: "User", value: "user" },
        { title: "Admin", value: "admin" }
    ]


    const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4eMoz7DH8l_Q-iCzSc1xyu_C2iryWh2O9_FcDBpY04w&s"

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
        <div className={`fixed z-50 flex flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-75`}>
            <form className="w-[350px] relative bg-white px-10 py-5 rounded-lg" onSubmit={saveRegister}>
                <div className="flex justify-between">
                    <h1 className="my-4 text-3xl font-bold text-fisrt">Register</h1>
                    <button className="my-5 text-2xl font-bold" onClick={showRegister}>X</button>
                </div>
                <Input title={"Fullname"} ref={focus} placeHolder={undefined} type={"text"} onchange={getInput} name={"firstName"} value={undefined} />
                <Select data={gender} label={"Gender"} value={getInput} name={"gender"} />
                {/* <Input title={"Gender"} placeHolder={undefined} type={"text"} onchange={getInput} name={"gender"} /> */}
                <Input title={"Username"} placeHolder={undefined} type={"text"} onchange={getInput} name={"username"} value={undefined} />
                <div className="relative">
                    <Input title={"Password"} placeHolder={undefined} type={typePass} onchange={getInput} name={"password"} value={undefined} />
                    <div className="absolute cursor-pointer right-1 top-10">
                        {!showPass ? <Eye onClick={handleShowPass} /> : <EyeOff onClick={handleHiddPass} />}
                    </div>
                </div>
                <Select data={optionRole} label={"Role"} value={getInput} name={"role"} />
                {/* <Input title={"role"} placeHolder={undefined} type={"text"} onchange={getInput} name={"role"} /> */}
                <div className="relative flex flex-col items-center justify-center">
                    {role}
                    <div className="flex justify-center w-20 h-20" onClick={Profile}>
                        <img className="object-cover rounded-full shadow cursor-pointer" onClick={Profile} src={profile} alt="" />
                    </div>
                    <p className="mb-1 text-lg font-bold text-center">Foto Profile</p>
                    {!showInputProfile ? '' : <div className="absolute top-0 p-5 bg-white rounded-xl -right-72">
                        <div className="flex justify-end mb-2">
                            <X className="cursor-pointer hover:text-fisrt" onClick={closeProfile} />
                        </div>
                        <input className="py-2 mb-2 rounded-sm w-80 ring ring-black ps-2" name="profile" onChange={getInput} required placeholder={profileImage} ref={profileRef} type="text" />
                        <div className="flex w-full justify-evenly">
                            <Button onClick={setImageProfile} type='submit' title="Terapkan" hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} margin="my-2" />
                        </div>
                    </div>}
                </div>
                <Button title={"Register"} type="submit" hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} />
                <p className="flex justify-between">Do You have an account ? <Link to="#" onClick={change} className="text-blue-500">Login</Link></p>
            </form>
        </div>
    )
}
