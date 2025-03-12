import Marquee from "react-fast-marquee";
import MarqueeBox from "./MarqueeBox";

const TrustedCompanies = () => {
  const logos = [
    "/logoipsum-362.svg",
    "/logoipsum-297.svg",
    "/logoipsum-325.svg",
    "/logoipsum-335.svg",
    "/logoipsum-341.svg",
    "/logoipsum-348.svg",
  ];

  return (
    <div className="bg-black py-10 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">
        Trusted by 200+ companies around the world
      </h2>
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-4 my-10">
            <MarqueeBox icon={logo} title="img"/>
          </div>
        ))}
      </Marquee>
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-4">
            <MarqueeBox icon={logo} title="img"/>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedCompanies;