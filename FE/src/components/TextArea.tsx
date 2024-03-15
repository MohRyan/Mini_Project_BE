
export const TextArea = (props: { title: string; style: string }) => {
    const { title, style } = props
    return (
        <div className='flex flex-col'>
            <b className="mb-1 text-lg font-bold">{title}</b>
            <textarea className={`${style} ps-3 pt-2 rounded-sm ring ring-black`}></textarea>
        </div>
    )
}
