// import { useState } from "react"
import * as React from "react"
import { Button } from "../components/Button"
import { Input } from "../components/elements/input"
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";

export const Register = ({ showRegister, isRegister, change }: any) => {
    const [value, setValue] = React.useState<Array<any>>([{
        firstName: '',
        lastName: '',
        gender: '',
        username: '',
        password: '',
        role: ''
    }])

    // const roleRef: React.MutableRefObject<any> = React.useRef<HTMLInputElement>()

    const navigate = useNavigate();

    const saveRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/v1/register", value);
            alert("Register Success!!!....")
        } catch (error) {
            console.log(error);
        }
    };

    const getInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
        console.log(value)
    };
    return (
        <div className={`fixed z-50 flex flex-col items-center justify-center w-screen h-screen bg-black bg-opacity-75`}>
            <form className="w-[350px] relative bg-white px-10 py-5 rounded-lg" onSubmit={saveRegister}>
                <div className="flex justify-between">
                    <h1 className="my-4 text-3xl font-bold text-fisrt">Register</h1>
                    <button className="my-5 text-2xl font-bold" onClick={showRegister}>X</button>
                </div>
                <Input title={"Firstname"} placeHolder={undefined} type={"text"} onchange={getInput} name={"firstName"} />
                <Input title={"Lastname"} placeHolder={undefined} type={"text"} onchange={getInput} name={"lastName"} />
                <Input title={"Gender"} placeHolder={undefined} type={"text"} onchange={getInput} name={"gender"} />
                <Input title={"username"} placeHolder={undefined} type={"text"} onchange={getInput} name={"username"} />
                <Input title={"password"} placeHolder={undefined} type={"text"} onchange={getInput} name={"password"} />
                <Input title={"role"} placeHolder={undefined} type={"text"} onchange={getInput} name={"role"} />
                <Button title={"Register"} type="submit" hover={"text-white hover:bg-opacity-60 rounded-lg w-full"} />
                <p className="flex justify-between">Do You have an account ? <Link to="#" onClick={change} className="text-link">Login</Link></p>
            </form>
        </div>
    )
}
