import { ChangeEvent } from "react"

interface textArea {
    title: string,
    style: string,
    onchange: any;
    name: string,
    placeHolder: string
}

export const TextArea = (props: textArea) => {
    const { title, style, onchange, name, placeHolder } = props
    return (
        <div className='flex flex-col'>
            <b className="mb-1 text-lg font-bold">{title}</b>
            <textarea name={name} placeholder={placeHolder} onChange={onchange} className={`${style} ps-3 pt-2 mb-5 rounded-sm ring ring-black`}></textarea>
        </div>
    )
}
