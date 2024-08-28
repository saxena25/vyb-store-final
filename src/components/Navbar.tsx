'use client'
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import user from "@/assets/user.png"
import Image from "next/image";
// import Image from "next/image";

function Navbar() {

    return ( 
        <div>
            <div style={{backgroundColor: "rgba(214, 214, 214, 0.4)"}} className="w-[80rem] flex flex-row border justify-between rounded-full fixed top-5 left-[21rem] z-50 px-2 py-4 backdrop-blur-lg h-[6rem]">
                <div className="flex flex-row justify-evenly mx-4 mt-4">
                    <Image src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717142581576x589293308934299500%2FLOGO.gif?w=96&h=58&auto=compress&dpr=1&fit=max" alt="vyb-logo" className="w-14 mr-2" />
                    <div className="relative">
                        <input type="text" placeholder="Search Creator" className="pl-8 border border-black rounded-full h-8 bg-gray-100 text-sm" />
                        <FiSearch size={20} className="absolute top-1.5 left-2" />
                        <Link href="#" className="absolute top-1.5 right-1.5 text-sm">Creator</Link>
                    </div>
                </div>
                <div className="mx-4 mt-4">
                    <Link href="#" className="mx-2 font-bold text-xl">Contact Us</Link>
                    <Link href="#" className="mx-2 font-bold text-xl">About Us</Link>
                    <Link href="#" className="mx-2 font-bold text-xl">Policies</Link>
                </div>
                <div className="mx-4 mr-6 mt-4">
                    {/* <button className="font-bold border border-black px-4 py-1 rounded-md bg-white" >Login</button>
                    <button className="font-bold border border-black px-4 py-1 rounded-md bg-white">Profile</button> */}
                    <Link href="/profile" className="font-bold border border-black px-5 py-3 rounded-md bg-white mr-2">profile</Link>
                    <Link href="/login" className="font-bold border border-black px-6 py-3 rounded-md bg-white">login</Link>
                </div>
            </div>
        </div>
     );
}

export default Navbar;