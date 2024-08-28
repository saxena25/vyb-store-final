import Image from "next/image";
import indiaGate from "@/assets/indiaGate.jpeg";
import Link from "next/link";

function Video() {
    return ( 
        <div className="bg-white max-w-full">
        <div className="mx-auto max-w-full py-24 sm:px-6 sm:py-32 lg:px-8">
            <div style={{backgroundColor: "#6ff2bd"}} className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 flex flex-col">
                <div className="flex justify-between mt-10">
                    <div className="text-4xl font-bold">Products</div>
                    <div>
                        <select name="itinerary" id="itinerary" className="px-5 py-2 rounded-lg text-lg border border-black mr-2">
                            <option value="itinerary" >Itinerary</option>
                            <option value="delhi" >Delhi</option>
                            <option value="ladakh" >Ladakh</option>
                            <option value="manali" >Manali</option>
                        </select>
                        <button style={{backgroundColor: "rgba(0,60,59,1)"}} className="text-white px-5 py-2 rounded-lg border-none">Demo Store</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left pl-10 ">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        Delhi Itinerary
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-black">
                        Delhi, India&#39;s capital territory, is a massive metropolitan area in the country&#39;s north. In Old Delhi, a neighborhood dating
                        to the 1600s, stands the imposting mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose 
                        courtyard accommodates 25,000 people. 
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                href="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Rs. 349
                            </Link>
                            <Link href="#" style={{backgroundColor: "rgba(0,60,59,1)"}} className="text-sm font-semibold leading-6 text-white px-3.5 py-2.5 rounded-md">
                                More <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-20 pt-16 h-60 lg:mt-8">
                        <Image
                            alt="App screenshot"
                            src={indiaGate}
                            width={600}
                            height={800}
                            className="w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default Video;