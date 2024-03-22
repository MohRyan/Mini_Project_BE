import { Navbar } from "@/components/Navbar"
import { Link } from "react-router-dom"
import article from "@/Json/article.json"
import sampleFoto from "@/assets/images/sampleFoto.png"
import { Footer } from "@/components/Footer"
import { ArrowBigLeft } from "lucide-react"

let lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aut odio fugit delectus quibusdam iure. Sed id, aperiam accusamus nesciunt esse doloremque sint cupiditate pariatur voluptas modi delectus optio eum nisi odio impedit voluptate autem commodi magni sunt temporibus suscipit, enim iste tempora! Molestiae mollitia aliquam eligendi praesentium totam laborum, possimus doloremque blanditiis, nihil quas, ut fugit obcaecati autem qui ad perspiciatis omnis incidunt maxime vel nemo eius quasi soluta porro! Natus, dignissimos ullam! Fugit saepe, dolores laboriosam iste molestias qui, ea, dolore corporis fugiat quam maxime eum beatae eligendi blanditiis voluptatibus. Placeat quam voluptate quidem non consectetur nam assumenda doloribus pariatur. Repellendus velit minus, similique quod temporibus aliquam soluta deleniti itaque delectus maiores molestias, at sunt consequatur, eligendi beatae? Rem saepe numquam omnis suscipit nemo id autem, nostrum magni ut tempore velit sapiente assumenda veritatis nesciunt placeat repellendus odit dolores voluptatum quaerat expedita. Tempore, esse aliquam! Perferendis deserunt rem, magnam fugit pariatur consequatur explicabo quisquam officiis nam repellat, nulla sint facilis commodi atque. Quidem, fugiat iusto! Quam doloribus expedita provident dolorem neque quaerat aliquam earum sit odio quasi, temporibus itaque sequi impedit voluptatem, sapiente nam placeat eligendi omnis laudantium excepturi! Deserunt ex corporis maiores magnam, quae et aut modi."

export const Detail = () => {
    return (
        <div>
            <Navbar users={""} />
            <div className="flex justify-center w-screen py-10 bg-page">
                <div className="w-[1440px] bg-white p-10">
                    <Link to="/" className="absolute"><ArrowBigLeft size={45} /></Link>
                    {article.map(item => (
                        <div className="flex flex-col items-center">
                            <p>Berita Hari ini</p>
                            <b className="mt-3 text-4xl text-fisrt">{item.title}</b>
                            <p>{item.admin}</p>
                            <p>{item.tanggal}</p>
                            <img src={sampleFoto} className="w-full my-2" alt="" />
                            <div className="my-5 text-justify">
                                {lorem}
                            </div>
                            <div className="mb-5 text-justify">
                                {lorem}
                            </div>
                            <div className="mb-5 text-justify">
                                {lorem}
                            </div>
                            <div className="mb-5 text-justify">
                                {lorem}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
