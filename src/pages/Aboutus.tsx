import Button from "../components/Button";
import Hero from "../components/Hero";

const About: React.FC = () => {
    return (
      <div className="bg-black text-white max-w-screen w-screen">
        <Hero section="About us" title="Shadient.co" desc="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros" textTitle="Contact"/>
        <div className="bg-[#0F0F0F] h-[70vh] py-5">

        
        <section className="bg-[#0F0F0F] h-[20vh] mb-10 px-4 lg:px-32 pt-10">
          <h2 className="text-4xl font-bold mb-4">Company</h2>
          <p className="text-lg max-w-2xl text-[#FFFFFF99]">
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero
            facilisis hendrerit a at. Nisi sem ut sed faucibus at eu elit. Morbi
            aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam
            vulputate dui proin quis enim nibh.
          </p>
        </section>
  
        {/* Team Section */}
        <section className="px-4 lg:px-32 pt-10 bg-[#0F0F0F] h-[30vh]">
          <h2 className="text-4xl font-bold mb-4">Team</h2>
          <div className="max-w-2xl">
            <p className="text-lg text-[#FFFFFF99]">
              Commodo diam vulputate dui proin quis enim nibh. Non integer ac
              libero facilisis hendrerit a at. Nisi sem ut sed faucibus at eu
              elit. Morbi aliquam porttitor mattis consequat neque, tellus
              blandit. Commodo diam vulputate dui proin quis enim nibh.
            </p>
          </div>
        </section>
  
        {/* Button */}
        <div className="lg:px-32">
          <Button text="Go To Home" />
        </div>
        </div>
      </div>
    );
  };
  
  export default About;