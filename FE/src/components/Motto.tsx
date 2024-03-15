export const Motto = (props: { red?: "hidden" | ""; black?: "hidden" | "" }) => {
    const { red = "hidden", black = "hidden" } = props
    return (
        <div className="Motto__">
            <p className={`text-2xl lg:text-4xl font-bold ${black}`}>PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT</p>
            <p className={`text-4xl font-bold text-red-600 ${red}`}>PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT</p>
        </div>
    )
}
