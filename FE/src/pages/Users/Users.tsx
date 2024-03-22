import { Article } from '@/components/Article'
import { Footer } from '@/components/Footer'
import { Motto } from '@/components/Motto'
import { Navbar } from '@/components/Navbar'
import { Welcome } from '@/components/Welcome'
import { Select } from '@/components/elements/Select/Select'
import * as React from 'react'

export const Users = () => {

    return (
        <div className='w-screen p-0 m-0'>
            <Navbar users={""} />
            <section className='flex flex-col items-center justify-center px-40 py-16 lg:py-20 bg-page'>
                <Welcome />
                <Article />
            </section>
            <section className='flex flex-col items-center justify-center px-40 pt-14'>
                <Motto black={""} />
            </section>
            <Footer />
        </div>
    )
}
