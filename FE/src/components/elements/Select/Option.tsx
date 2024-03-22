import React from 'react'

interface option {
    title: string,
    value: string
}

const Option = (props: option) => {
    const { title, value } = props
    return <option value={value}>{title}</option>

}

export default Option