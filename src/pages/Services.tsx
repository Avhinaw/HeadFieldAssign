import Section from "../components/Section";
import BrandingCard from "../components/BrandingCard";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import Hero from "../components/Hero";

const Services: React.FC = () => {
  return (
    <div className="bg-black text-white h-screenp-10 max-w-screen w-screen">

      <Hero section="Branding" title="Find your niche" desc="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros " textTitle="Build My Brand"/>
      
      <Section title="Process">
        <p className="max-w-3xl text-[#FFFFFF99] text-sm">
        Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  
        </p>
      </Section>

      {/* Branding Works */}
      <Section title="Branding Works">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <BrandingCard key={index} />
          ))}
        </div>
      </Section>

      {/* Other Services */}
      <Section title="Other Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ServiceCard title="Mobile App" desc="Egestas tellus nunc proin amet tellus tincidunt lacus." icon="/Frame.png"/>
          <ServiceCard title="SEO" desc="Integer ante non nunc, eget est justo vel semper nunc." icon="/Frame.png"/>
          <ServiceCard title="User testing" desc="Sed faucibus faucibus egestas volutpat." icon="/Frame.png"/>
        </div>
      </Section>

      {/* Button */}
      <div className="mt-6 px-32">
        <Button text ="GO TO HOME" />
      </div>
    </div>
  );
};

export default Services;