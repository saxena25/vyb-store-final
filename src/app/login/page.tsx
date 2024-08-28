import Navbar from "@/components/Navbar";

function LoginHome() {
    return ( 
        <div>
            <Navbar />
            <div className="mt-44 w-[70rem] m-auto flex flex-row justify-between">
                <div>
                    <img src="https://vyb-store-clone.vercel.app/photo.png" alt="Dude coding on laptop" />
                </div>
                <div className="w-[35rem] px-5">
                    <div className="flex justify-center flex-col items-center">
                        <h1 className="text-4xl font-extrabold">Login</h1>
                        <button className="flex flex-row w-[20rem] border-2 items-center justify-center py-2 mt-4 rounded-xl border-black mb-5">
                            <img width="25" height="25" src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo"/>
                            <p>Log in with google</p>
                        </button>
                        <p>---------OR---------</p>
                    </div>
                    <div className="mt-5">
                        <form action="">
                            <h2 className="text-3xl font-bold">Email</h2>
                            <input className="w-full border border-black mt-2 h-10 rounded-lg pl-4" placeholder="Enter Email address" type="email" name="" id="" required />
                            <h2 className="text-3xl font-bold mt-4">Password</h2>
                            <input className="w-full border border-black mt-2 h-10 rounded-lg pl-4" placeholder="Enter password" type="password" name="" id="" required />
                            <input style={{backgroundColor: "rgba(0,60,59,1)"}} className="text-white w-[10rem] m-auto border border-black py-2 mt-5 rounded-md" type="submit" value="Login" />
                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8">
                        <p>----Don't have an account?----</p>
                        <button style={{backgroundColor: "rgba(0,60,59,1)"}} className="text-white w-[12rem] py-2 mt-5 rounded-xl">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LoginHome;