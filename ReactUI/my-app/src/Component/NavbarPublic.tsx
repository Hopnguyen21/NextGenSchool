import { Link } from "react-router-dom";;

export default function navbarpublic(){
    return (
        <nav className="bg-while shadow-lg h-16 sticky top-0 z-50">
            <div className="w-full h-full flex items-center justify-between  px-6">
            <div className="flex items-center space-x-2 ">
                <img src="imgpublic/NGS.png" alt="logosystem" className="h-20 w-25 object-contain"/>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#008CB8] to-[#000000] text-transparent bg-clip-text">NextGenSchool</span>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="/about" className="text-black hover:text-[#008CB8] font-extrabold text-2xl">
                    about
                </a>
                  <a href="/feature" className="text-black hover:text-[#008CB8] font-extrabold text-2xl">
                    Feature
                </a>
                  <a href="/Contact" className="text-black hover:text-[#008CB8] font-extrabold text-2xl">
                    Contact
                </a>
            </div>
            <div>
                <Link to="/login">
                <button className="bg-[#008CB8] text-white px-4 py-2 rounded-2xl font-bold">Login</button>
                </Link>
            </div>
            </div>
        </nav>

    )
}