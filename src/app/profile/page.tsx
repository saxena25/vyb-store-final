import Navbar from "@/components/Navbar";
import Image from "next/image";

function Profile() {
    return ( 
        <div className="w-full">
            <Navbar />
            <div className="w-[70rem] mt-36 flex flex-row m-auto justify-between">
                <div className="border border-black flex flex-col items-center mr-10 px-14 py-5 h-[40rem] justify-evenly rounded-2xl">
                    <Image src="https://vyb-store-clone.vercel.app/profile-pic.png" alt="Profile Photo" className="mb-0 w-[16rem]"/>
                    <p className="mt-0 leading-none text-xs">change Profile Picture</p>
                    <h1 className="text-4xl font-bold">Samira Hadid</h1>
                    <button style={{backgroundColor: "rgba(0,60,59,1)"}} className="text-white border px-24 py-2 rounded-xl">Profile</button>
                    <button className="border-2 px-24 py-2 rounded-xl">My Store</button>
                    <button className="border-2 px-24 py-2 rounded-xl">Earnings</button>
                    <button className="border-2 px-24 py-2 rounded-xl">Address</button>
                    <button style={{backgroundColor: "rgba(0,60,59,1)"}} className="text-white border px-24 py-2 rounded-xl">Logout</button>
                </div>
                <div className="border border-black flex-1 h-[45rem] rounded-2xl px-5 py-5">
                    <h1 className="text-5xl font-bold">Profile</h1>
                    <form action="">
                        <h2 className="text-2xl font-semibold mt-5">User Name</h2>
                        <input className="border-2 w-full h-10 rounded-md pl-2 mt-2" type="text" required placeholder="Enter user name" />
                        <h2 className="text-2xl font-semibold mt-5">Email</h2>
                        <input className="border-2 w-full h-10 rounded-md pl-2 mt-2" type="email" name="" id="" required placeholder="Enter email address" />
                        <h2 className="text-2xl font-semibold mt-5">Password</h2>
                        <input className="border-2 w-full h-10 rounded-md pl-2 mt-2" type="password" name="" id="" required placeholder="Enter password" />
                        <h2 className="text-2xl font-semibold mt-5">Phone Number</h2>
                        <input className="border-2 w-full h-10 rounded-md pl-2 mt-2" type="number" name="" id="" required placeholder="Enter phone number" max={10} />
                        <input type="submit" value="Save" style={{backgroundColor: "rgba(0,60,59,1)"}} className="text-white border px-24 py-2 rounded-xl mt-7" />
                    </form>
                </div>
                <div className="hidden">
                    <h1>Creator Store</h1>
                    <p>Change Cover Picture</p>
                    <h2>Link Social Media Account</h2>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <input type="number" name="" id="" />
                            <input type="text" />
                        </div>
                        <div>
                            <img src="" alt="" />
                            <input type="number" name="" id="" />
                            <input type="text" />
                        </div>
                    </div>
                    <h2>Claim Your Store URl</h2>
                    <input type="text" />
                    <h2>Select Genre</h2>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <h2>Add your Bank Details</h2>
                    <input type="number" name="" id="" />
                    <h2>Add PAN card Number</h2>
                    <input type="text" />
                    <h2>GST Invoicing</h2>
                    <input type="text" />
                    <button type="submit">Save</button>
                </div>
            </div>
        </div>
     );
}

export default Profile;