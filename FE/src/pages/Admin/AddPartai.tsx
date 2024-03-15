import { Navbar } from '../../components/Navbar'
import { Input } from '../../components/elements/input'
import { Button } from '../../components/Button'
import * as React from 'react'
import { X } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export const AddPartai = () => {
    const [value, setValue] = React.useState<Array<any>>([{
        no: '',
        logo: '',
        ketum: '',
        visimisi: '',
        address: ''
    }])


    const navigate = useNavigate();

    const savePartai = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/v1/partai", value);

            navigate("/listpartai");
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
            <form className='flex flex-col items-center justify-center h-screen' onSubmit={savePartai}>
                {!show ? "" : <div className='fixed flex flex-col items-center justify-center w-screen h-screen bg-white bg-opacity-95'><X className='cursor-pointer' onClick={handleShow} /><div className='w-96'><Input title={'Masukkan Alamat Gambar'} placeHolder={undefined} ref={imageRef} type={undefined} onchange={getInput} name={"logo"} /></div><button className='px-6 py-2 text-white bg-red-500 hover:bg-red-700 rounded-xl' onClick={handleimage}>Switch</button></div>}
                <b className='py-20 text-4xl text-fisrt'>ADD PARTAI</b>
                <div className='flex w-[1440px] justify-center items-center'>
                    <div className='mb-7'><img className='w-80' src={image} alt="" /><h1 onClick={handleShow} className='mt-3 text-center cursor-pointer'>Switch Image</h1></div>
                    <div className='w-2/3 ps-12'>
                        <Input title="Nomor Urut" placeHolder={undefined} type={"number"} onchange={getInput} name={"no"} />
                        <Input title="Ketua Umum" placeHolder={undefined} type={"text"} onchange={getInput} name={"ketum"} />
                        <Input title="Visi Misi" placeHolder={undefined} type={"text"} onchange={getInput} name={"visimisi"} />
                        <Input title="Alamat" placeHolder={undefined} type={"text"} onchange={getInput} name={"address"} />
                        {/* {value} */}
                        <Button title="SUBMIT" type="submit" hover="text-white px-48 rounded-lg hover:opacity-50" />
                    </div>
                </div>
            </form>
        </div>
    )
}
