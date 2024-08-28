'use client'
import { useState } from 'react';
import add from "@/assets/add.png"

const FAQItem = ({question, answer}:any) =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div style={{color: "rgba(0,60,59,1)", backgroundColor: "#E5F0F1"}} className='max-w-3xl m-auto my-4 py-3 rounded-xl'>
            <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex flex-row justify-between'>
                <h3 className='font-semibold ml-5'>{question}</h3>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/add--v1.png" alt="add--v1" className='w-6 mr-5'/>
            </div>
            {isOpen && <div className=''>
                    <div className='h-[2px] bg-black mx-3 mt-2'></div>
                    <div className='text-left mx-4'>{answer}</div>
                </div>}
        </div>
    )
}

function Footer() {
    const faq=[
        {
            question: "How does the VYB Store Work?",
            answer: "VYB Store is an influencer marketplace. You can monetize your travel itinerary, merchandise, digital content, and fashion brand. And much more yet to come."
        },
        {
            question: "How do I get started with the VYB Store?",
            answer: "Getting started with VYB Store is super easy! Simply sign up for an account, create your store, and start sharing your store link in your Instagram bio with the audience."
        },
        {
            question: "What does “Zero Cost” mean?",
            answer: "Zero cost means vybing with us is completely free. You don't have to pay a single rupee to build your store and monetize your audience."
        },
        {
            question: "How do I track my earnings on VYB Store?",
            answer: "We provide you with detailed analytics to track your earnings and performance. You can see how many purchases your links have generated, as well as your total earnings."
        },
        {
            question: "What kind of products can I sell on VYB Store?",
            answer: "You can sell a variety of products on VYB Store, including physical merchandise, digital downloads, and even services like travel itineraries and plenty more."
        },
        {
            question: "How do I withdraw my earnings?",
            answer: "We offer various payout options, including bank transfers. In the earning section under your profile click the withdraw button to withdraw your earnings. Withdrawal will be available every 14 days."
        },
        {
            question: "How can I get support if I have any questions or issues?",
            answer: "If you have any questions or issues, you can reach out to VYB Store's customer support team via email at support@vybstore.com. We're here to help you succeed!"
        }
    ]

    return ( 
        <div className='w-full text-center mb-20'>
            <div style={{color: "#154020"}} className='text-3xl font-semibold mb-5'>FREQUENTLY ASKED QUESTIONS</div>
            <div className='w-fit m-auto text-left mb-16'>
                <p>Quick answer to questions you may have. can&#39;t find what you&#39;re looking for?</p>
                <p>Check out our full documentation</p>
            </div>
            {faq.map((faq,index)=>(
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
     );
}

export default Footer;