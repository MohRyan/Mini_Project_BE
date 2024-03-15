import dumways from "../assets/images/brandred 1.png"
import kotakSuara from "../assets/images/kotak-suara.png"

export const Welcome = () => {
    return (
        <div className="Welcome__">
            <img className="absolute md:h-[206px] h-[150px]" src={dumways} alt="" />
            <img className="Welcome__Kotak__Suara" src={kotakSuara} alt="" />
            <div className="absolute bottom-0 pb-5 font-bold text-white ps-5">
                <p className="text-4xl md:text-5xl">SELAMAT DATANG</p>
                <p className="Welcome__Text">PEMILU PRESIDEN DUMWAYS.ID YANG JUJUR</p>
                <p className="Welcome__Text">DIPILIH MELALUI SEBUAH ARTI NAMA</p>
            </div>
        </div>
    )
}
