import React, { useState } from 'react'
import Option from './Option'


export const Select = (props: { data: any; label: string; value: any, name: string }) => {
    const { data, label, value, name } = props

    // const handleStatus = (e: any) => {
    //     if (e.target.value === "Users") {
    //         localStorage.clear()
    //         localStorage.setItem("Users", e.target.value)
    //     }
    //     if (e.target.value === "Admin") {
    //         localStorage.clear()
    //         localStorage.setItem("Admin", e.target.value)
    //     }
    // }

    return (
        <>
            <p className='mb-1 text-lg font-bold'>{label}</p>
            <select className='w-full py-2 mb-5 rounded-sm ring ring-black ps-2' onChange={value} name={name}>
                {(data).map((item: { title: string; value: string }, index: React.Key | null | undefined) => (
                    <Option key={index} title={item.title} value={item.value} />
                ))}
            </select>
        </>
    )
}
