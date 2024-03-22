import { LegacyRef, forwardRef } from "react";

// export const Input = (props: { title: any; placeHolder: any; type: any; onchange: any; name: any }) => {

//     const { title, placeHolder, type, onchange, name } = props
//     return (
//         <div>
//             <p className="mb-1 text-lg font-bold">{title}</p>
//             <input className="w-full py-2 mb-5 rounded-sm ring ring-black ps-2" type={type} onChange={onchange} name={name} placeholder={placeHolder} />
//         </div>
//     )
// }
interface Input {
    title: string;
    placeHolder: string | undefined;
    type: string | undefined;
    onchange: any;
    name: any;
    value: string | undefined
}
export const Input = forwardRef((props: Input, ref: LegacyRef<HTMLInputElement> | undefined) => {

    const { title, placeHolder, type, onchange, name, value } = props
    return (
        <div>
            <p className="mb-1 text-lg font-bold">{title}</p>
            <input className="w-full py-2 mb-5 rounded-sm ring ring-black ps-2" type={type} ref={ref} onChange={onchange} value={value} name={name} placeholder={placeHolder} />
        </div>
    )
})
