
// export const Button = (props: { title: any; bg?: "bg-fisrt" | undefined; hover?: "rounded-sm" | undefined; onClick: any; type?: "button" | undefined }) => {
export const Button = (props: any) => {
    const { title, bg = "bg-fisrt", hover = "rounded-sm", onClick, type = "button", margin = "my-5" } = props
    return (
        <div>
            <div className={margin}>
                <button onClick={onClick} type={type} className={`${bg} py-1 px-6 font-bold ${hover}`}>{title}</button>
            </div>
        </div>
    )
}
