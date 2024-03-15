
export const BelumDaftar = ({ showBelumDaftar }: any) => {
    return (
        <div className={`fixed z-20 ${!showBelumDaftar ? "hidden" : "flex"} flex-col items-center justify-center w-screen h-screen`}>
            <div className="absolute z-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-2xl"></div>
            <div className="w-[350px] relative bg-white px-10 py-5 rounded-lg">
                <h1 className="my-5 text-3xl font-bold text-fisrt">Anda Belum Login</h1>
                <p className="flex justify-between">Silahkan Login Terlebih Dahulu.</p>
            </div>
        </div>
    )
}