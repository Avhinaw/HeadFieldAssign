import gsap from 'gsap'
import ServiceCard from "../components/ServiceCard"
import Button from "../components/Button"
import Idea from "../components/Idea"
import TrustedCompanies from "../components/TrustedCompanies"
import TestimonialsMarquee from "../components/TestomonialMarquee"
import { useRef } from "react"
import { useGSAP } from '@gsap/react'
import ShowCaseBox from '../components/ShowCaseBox'

function Home() {


  const ServiceCardData = [
    {
      title:"Branding",
      desc:"Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
      icon:"/Frame(2).png"
    },
{
  title:"Web development", 
  desc:"Integer ante non nunc, eget est justo vel semper nunc.", 
  icon:"/Frame(3).png"
},
{
  title:"Digital marketing", 
  desc:"Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
icon:"/Frame(4).png"
},  
{
title:"Mobile App", 
desc:"Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices", 
icon:"/Frame(5).png"
},

{
  title:"SEO", 
desc:"Integer ante non nunc, eget est justo vel semper nunc.", 
icon:"/Frame(6).png"
},

{
title:"User testing", 
desc:"Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.", icon:"/Frame(7).png"
}
  ]
  
  const ShowCaseData = [
    {
      category: "Website",
      title: "Creative landing page"
    },
    {
      category: "Digital marketing",
      title: "Why We Collect User’s Data"
    },
    {
      category: "Branding",
      title: "Creative Branding"
    },
    {
      category: "User testing",
      title: "Creative landing page"
    },
    {
      category: "DEVELOPMENT",
      title: "Automation. Advanced Level"
    },
    {
      category: "SEO",
      title: "How We Optimized Our SEO"
    },
  ]


    const circle1 = useRef(null);
    const circle2 = useRef(null);
  
    useGSAP(() => {
      // Circle 1 Animation
      gsap.to(circle1.current, {
        keyframes: [
          { x:400, y:-70, duration: 2.0, ease: "power3.inOut" },
          { x:450, y:-50, duration: 1.5, ease: "power3.inOut" },
          { x:500, y:-30, duration: 1, ease: "power3.inOut" }
        ],
        repeat: -1,
        yoyo: true
      });
  
      // Circle 2 Animation
      gsap.to(circle2.current, {
        keyframes: [
          { x:-300, y:-30, duration: 2.0, ease: "power3.inOut" },
          { x:-400, y:-10, duration: 1.5, ease: "power3.inOut" },
          { x:-500, y:10, duration: 1, ease: "power3.inOut" }
        ],
        repeat: -1,
        yoyo: true
      });
    });






  return (
    <>
    <div className="h-screen text-white bg-black overflow-x-hidden w-screen max-w-screen">  

    <div ref={circle1} className="w-[20em] h-[22em] lg:w-[25em] lg:h-[25em] circle1"></div>
    <div ref={circle2} className="w-[20em] h-[22em] lg:w-[25em] lg:h-[25em] circle2"></div>

        <div className="h-screen w-screen z-20 backdrop-blur-2xl bg-[#ffffff1a]">
          <div className="flex flex-col gap-6 h-screen items-center justify-center">
            <h3 className="text-7xl font-bold flex flex-col">Attract <span className="gradient font-bold">NewLeads</span> like never <span>before</span> </h3>
            <p className="lg:w-[460px] text-[#FFFFFF99] lg:text-end px-4 lg:px-0">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p>
            <div className="flex pt-5 lg:gap-4">
              <input type="text" name="" id="" placeholder="Email" className="border rounded-full px-2"/>
              <Button text="Attract"/>
            </div>
          </div>
        </div>
    </div>

<div className="flex flex-col lg:flex-row py-15 text-center lg:text-start lg:px-32 bg-black lg:h-54 items-center gap-8 lg:gap-20 text-white">
<h4 className="text-4xl lg:w-[500px] font-bold">Trusted by 200+ companies around the world</h4>
<p className="lg:w-[500px] text-[#FFFFFF99] text-sm">Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.</p>
</div>


<TrustedCompanies />



<div className="bg-[#110F0F] w-full h-full lg:h-screen px-4 lg:px-32 py-20 text-white">
  <h4 className="text-center font-bold text-4xl">We Offer</h4>
  <p className="text-center text-[#FFFFFF99] m-auto pt-5 text-sm lg:w-[500px]">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
<div className="flex flex-wrap gap-10 py-10 items-centers justify-center">
{ServiceCardData.map((ServiceCar, idx)=> (
<ServiceCard key={idx} {...ServiceCar}/>
))}
</div>
</div>
<div className="bg-black lg:h-[80vh] py-12 lg:py-0 gap-6 lg:gap-0 flex lg:flex-row flex-col-reverse text-white lg:items-center ">
  <img className="lg:h-[400px] " src="/searching-2194247-0.png" alt="" />
  <div className="flex gap-6 px-2 lg:items-start items-center flex-col">
    <h4 className="font-bold text-4xl text-center lg:text-start">Why choose us</h4>
    <p className="text-[#FFFFFF99] text-center lg:text-start lg:w-[450px] text-sm">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. </p>
    <Button text="Let's Connect"/ >
  </div>
</div>

<div className='bg-[#110F0F] w-screen flex gap-4 px-32 py-10 text-white'>

<div className='flex flex-col gap-4'>
  <h4 className='text-3xl w-[20vw]'>Some pieces of our work</h4>
  <p className='w-[22vw] text-sm text-[#FFFFFF99]'>Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
  <Button text="SHOW MORE" />
</div>

<div className='flex px-5 gap-10 flex-wrap'>
{ShowCaseData.map((box, idx)=> (
  <ShowCaseBox key={idx} {...box}/>
))}
</div>

</div>


<div className="bg-black py-4 lg:py-28 px-10 ">
<TestimonialsMarquee/>
</div>

<div className="bg-[#110F0F] px-8 py-15 lg:px-20 lg:py-20">
<Idea/>
</div>
    </>    
  )
}

export default Home







