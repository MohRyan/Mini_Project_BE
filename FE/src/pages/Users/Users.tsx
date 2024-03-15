import { Article } from '@/components/Article'
import { Footer } from '@/components/Footer'
import { Motto } from '@/components/Motto'
import { Navbar } from '@/components/Navbar'
import { Welcome } from '@/components/Welcome'
import axios from 'axios'
import * as React from 'react'

export const Users = () => {
    // const [register, setRegister] = React.useState<any[]>([])

    // const fake = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const fakeStore = await res.json()

    //     setRegister(fakeStore)
    // }



    // React.useEffect(() => {
    //     axios.get('http://localhost:4000/api/v1/article')
    //         .then((res) => {
    //             setRegister(res.data.data)
    //             console.log(res)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])



    return (
        <div className='w-screen p-0 m-0'>
            <Navbar users={""} />
            <section className='flex flex-col items-center justify-center px-40 py-16 lg:py-20 bg-page'>
                <Welcome />
                {/* {
                    register.map(item => (
                        <h1 key={item.id}>{item.title}</h1>
                    ))
                } */}
                <Article />
            </section>
            <section className='flex flex-col items-center justify-center px-40 pt-14'>
                <Motto black={""} />
            </section>
            <Footer />
        </div>
    )
}
