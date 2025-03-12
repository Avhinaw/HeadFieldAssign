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
    <div className="bg-black pb-20 text-white text-center">
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="lg:mx-4 mx-3 lg:my-5 my-3">
            <MarqueeBox icon={logo} title="img"/>
          </div>
        ))}
      </Marquee>
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="lg:mx-4 mx-3 lg:my-5 mt-3">
            <MarqueeBox icon={logo} title="img"/>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedCompanies;