import Image from "next/image";
function HeroSection() {
    const names=[
        {
            src:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129049845x104455195830874600%2Fbe28d803d9a96aa3f39ac979f9f7a3c0%25201.png?w=128&h=128&auto=compress&dpr=1&fit=max",
            title1: "Travel",
            title2:"Itinerary",
            alt:"Travel photo",
            width:128,
            height:128
        },
        {
            src:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129676236x902614560996062500%2Fc3f406dbad6bc39dc9f6a972791246b3%25201.png?w=128&h=143&auto=compress&dpr=1&fit=max",
            title1:"Custom",
            title2:"Merchandise",
            alt:"merchandise photo",
            width:128,
            height:128
        },
        {
            src:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129685688x205809444570131070%2F2a357d982060aa48621b1408be897e98%25201.png?w=128&h=129&auto=compress&dpr=1&fit=max",
            title1:"Digital",
            title2:"Content",
            alt:"camera photo",
            width:128,
            height:128
        },
        {
            src:"https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129740866x257181271145942000%2Ffdf29691d85e224cc6ddd59f8b6392fb%25201.png?w=128&h=97&auto=compress&dpr=1&fit=max",
            title1:"Fashion",
            title2:"Brand",
            alt:"guy working on Computer",
            width:128,
            height:128
        }
    ]
    return ( 
        <div className="relative w-full h-screen "> 
            <video src="https://9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io/f1721387510430x494031690418350140/hero%20section%20web%20%281%29.mp4?_gl=1*yj4ger*_gcl_au*MTMzOTk3MDA3OC4xNzE5MjMxMjA4*_ga*MTU1NDIzMTQ1LjE3MTEyMzQ3NDY.*_ga_BFPVR2DEE2*MTcyMTM4NzUwMi43NS4xLjE3MjEzODc3NjguNjAuMC4w" autoPlay loop  
            className="absolute top-0 left-0 w-full h-full "/>
            <div className='absolute bottom-0 left-1/4 z-10 flex flex-row items-center justify-between w-[70rem] bg-white border rounded-3xl translate-y-[50px] h-[12rem] shadow-2xl'>
                {names.map((item)=>(
                    <div key={item.title1} className='flex flex-col items-center mb-4 ml-10 mr-10 mt-5'>
                        <Image src={item.src} alt={item.alt} />
                        {/* <Image src={item.src} alt={item.alt} width={item.width} height={item.height} /> */}
                        <h3 className="mt-2 text-lg font-semibold text-black leading-none ">{item.title1}</h3>
                        <h3 className="text-lg font-semibold text-black mb-2">{item.title2}</h3>
                    </div>
                ))}  
                
            </div>
        </div>
     );
}

export default HeroSection;