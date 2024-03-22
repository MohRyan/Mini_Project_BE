import { Navbar } from '../../components/Navbar'
import { Input } from '../../components/elements/input'
import { Button } from '../../components/Button'
// import paslon from "../../assets/images/paslon.png"
// import { TextArea } from '../../components/elements/TextArea'
import { Plus, X } from 'lucide-react'
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
    // const [data, setData] = React.useState<any[]>([])
    // const [title, setTitle] = React.useState<string | undefined>(undefined)
    // const dataRef: React.MutableRefObject<any> = React.useRef<HTMLInputElement>()
    // const pushData = (e: { preventDefault: () => void }) => {
    //     e.preventDefault();
    //     const data1 = dataRef.current.value
    //     setData((prev: any[]) => [...prev, { data1 }])
    //     setTitle('')
    //     console.log(data)
    // };

    const focusRef: any = React.useRef()

    React.useEffect(() => {
        focusRef.current.focus()
    }, [])


    const navigate = useNavigate();

    const savePaslon = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // usePost("http://localhost:4000/api/v1/paslon", value)
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
        // console.log(value)
    };

    // const getData = () => {

    // };

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
                {!show ? "" : <div className='fixed flex flex-col items-center justify-center w-screen h-screen bg-white bg-opacity-95'><X className='cursor-pointer' onClick={handleShow} /><div className='w-96'><Input title={'Masukkan Alamat Gambar'} placeHolder={undefined} ref={imageRef} type={undefined} onchange={getInput} name={"image"} value={undefined} /></div><button className='px-6 py-2 text-white bg-red-500 hover:bg-red-700 rounded-xl' onClick={handleimage}>Switch</button></div>}
                <b className='py-20 text-4xl text-fisrt'>ADD PASLON</b>
                <div className='flex w-[1440px] justify-center items-center'>
                    <div className='mb-7'><img src={image} alt="" /><h1 onClick={handleShow} className='mt-3 text-center cursor-pointer'>Switch Image</h1></div>
                    <div className='w-2/3 ps-12'>
                        <Input title="Nomor Urut" placeHolder={undefined} ref={focusRef} type={"number"} onchange={getInput} name={"no"} value={undefined} />
                        <Input title="Nama" placeHolder={undefined} type={"text"} onchange={getInput} name={"name"} value={undefined} />
                        {/* <TextArea title={'Visi Misi'} style={''} onchange={getInput} name={'visimisi'} placeHolder={''} /> */}
                        <Input title="Visi Misi" placeHolder={undefined} type={"text"} onchange={getInput} name={"visimisi"} value={undefined} />
                        {/* <div className='relative'>
                            <Plus className='absolute cursor-pointer right-1 bottom-7' onClick={pushData} />
                            <Input title="Visi Misi" placeHolder={undefined} type={"text"} ref={dataRef} value={title} onchange={(e: { target: { value: React.SetStateAction<string | undefined> } }) => setTitle(e.target.value)} name={"visimisi"} />
                        </div> */}
                        {/* {data} */}

                        <Input title="Koalisi" placeHolder={undefined} type={"text"} onchange={getInput} name={"koalisi"} value={undefined} />
                        <Button title="SUBMIT" type="submit" hover="text-white px-48 rounded-lg hover:opacity-50" />
                    </div>
                </div>
            </form>
        </div>
    )
}
