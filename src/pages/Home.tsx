import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import ServiceCard from "../components/ServiceCard"
import Button from "../components/Button"
import Idea from "../components/Idea"
import TrustedCompanies from "../components/TrustedCompanies"
import TestimonialsMarquee from "../components/TestomonialMarquee"

function Home() {
  
  useGSAP(() => {
    gsap.to('.box', {
      
    })
  })
  return (
    <>
    <div className="h-screen text-white bg-black overflow-x-hidden w-screen max-w-screen">  

    <div className="circle1 lg:w-[25em]"></div>
    <div className="circle2"></div>

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



<div className="bg-[#110F0F] w-full h-full lg:h-[90vh] px-4 lg:px-32 py-20 text-white">
  <h4 className="text-center font-bold text-4xl">We Offer</h4>
  <p className="text-center text-[#FFFFFF99] m-auto pt-5 text-sm lg:w-[500px]">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
<div className="flex flex-wrap gap-10 py-10 items-centers justify-center">
<ServiceCard title="SEO" desc="Integer ante non nunc, eget est justo vel semper nunc." icon="/Frame.png"/>
<ServiceCard title="SEO" desc="Integer ante non nunc, eget est justo vel semper nunc." icon="/Frame.png"/>
<ServiceCard title="SEO" desc="Integer ante non nunc, eget est justo vel semper nunc." icon="/Frame.png"/>
<ServiceCard title="SEO" desc="Integer ante non nunc, eget est justo vel semper nunc." icon="/Frame.png"/>
<ServiceCard title="SEO" desc="Integer ante non nunc, eget est justo vel semper nunc." icon="/Frame.png"/>
<ServiceCard title="SEO" desc="Integer ante non nunc, eget est justo vel semper nunc." icon="/Frame.png"/>
</div>
</div>
<div className="bg-black lg:h-[60vh] py-12 lg:py-0 gap-6 lg:gap-0 flex lg:flex-row flex-col-reverse text-white lg:items-center ">
  <img className="lg:h-[400px] " src="/searching-2194247-0.png" alt="" />
  <div className="flex gap-6 lg:gap-4 lg:items-start items-center flex-col">
    <h4 className="font-bold text-4xl px-4 text-center lg:text-start">Why choose us</h4>
    <p className="text-[#FFFFFF99] text-center lg:text-start px-4 lg:w-[450px] text-sm">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. </p>
    <Button text="Let's Connect"/ >
  </div>
</div>
<div className="bg-black py-4 lg:py-6 px-10 ">
<TestimonialsMarquee/>
</div>

<div className="bg-[#110F0F] px-8 py-15 lg:px-20 lg:py-20">
<Idea/>
</div>
    </>    
  )
}

export default Home







