import React, { useState } from 'react'

export const Select = () => {

    const handleStatus = (e: any) => {
        if (e.target.value === "Users") {
            localStorage.clear()
            localStorage.setItem("Users", e.target.value)
        }
        if (e.target.value === "Admin") {
            localStorage.clear()
            localStorage.setItem("Admin", e.target.value)
        }
    }


    return (
        <>
            <select className='w-full p-2' onClick={handleStatus}>
                <option value="">Pilih Status</option>
                <option>Users</option>
                <option>Admin</option>
            </select>
        </>
    )
}
