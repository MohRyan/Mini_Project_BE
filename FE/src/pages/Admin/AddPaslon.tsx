import { Navbar } from '../../components/Navbar'
import { Input } from '../../components/elements/input'
import { Button } from '../../components/Button'
import paslon from "../../assets/images/paslon.png"
import { TextArea } from '../../components/TextArea'
import { X } from 'lucide-react'
import * as React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AddPaslon = () => {
    const [value, setValue] = React.useState<Array<any>>([{
        no: '',
        image: '',
        name: '',
        visimisi: '',
        koalisi: ''
    }])

    const navigate = useNavigate();

    const savePaslon = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/v1/paslon", value);

            navigate("/listpaslon");
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

    const [show, setShow] = React.useState<boolean>(false)
    const [image, setImage] = React.useState('https://placehold.co/600x400')
    const imageRef: React.MutableRefObject<any> = React.useRef<HTMLInputElement>()

    const handleShow = () => {
        setShow(!show)
    }
    const handleimage = () => {
        const images = imageRef.current.value
        if (images === '') {
            alert("Anda Tidak Mengganti Image")
        } else {
            setImage(images)
        }
        setShow(!show)
    }
    return (
        <div>
            <Navbar admin={""} />
            <form className='flex flex-col items-center justify-center h-screen' onSubmit={savePaslon}>
                {!show ? "" : <div className='fixed flex flex-col items-center justify-center w-screen h-screen bg-white bg-opacity-95'><X className='cursor-pointer' onClick={handleShow} /><div className='w-96'><Input title={'Masukkan Alamat Gambar'} placeHolder={undefined} ref={imageRef} type={undefined} onchange={getInput} name={"image"} /></div><button className='px-6 py-2 text-white bg-red-500 hover:bg-red-700 rounded-xl' onClick={handleimage}>Switch</button></div>}
                <b className='py-20 text-4xl text-fisrt'>ADD PASLON</b>
                <div className='flex w-[1440px] justify-center items-center'>
                    <div className='mb-7'><img src={image} alt="" /><h1 onClick={handleShow} className='mt-3 text-center cursor-pointer'>Switch Image</h1></div>
                    <div className='w-2/3 ps-12'>
                        <Input title="Nomor Urut" placeHolder={undefined} type={"number"} onchange={getInput} name={"no"} />
                        <Input title="Nama" placeHolder={undefined} type={"text"} onchange={getInput} name={"name"} />
                        <Input title="Visi Misi" placeHolder={undefined} type={"text"} onchange={getInput} name={"visimisi"} />
                        <Input title="Koalisi" placeHolder={undefined} type={"text"} onchange={getInput} name={"koalisi"} />
                        <Button title="SUBMIT" type="submit" hover="text-white px-48 rounded-lg hover:opacity-50" />
                    </div>
                </div>
            </form>
        </div>
    )
}
