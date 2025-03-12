
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full lg:h-[46vh]">
      <div className="container mx-auto px-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Company Section */}
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
{/* Resources Section */}
<div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Blog</li>
              <li>Case study</li>
              <li>Testimonials</li>
            </ul>
          </div>
          {/* Services Section */}
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Branding</li>
              <li>Web development</li>
              <li>Digital marketing</li>
              <li>Mobile app</li>
              <li>SEO</li>
              <li>User testing</li>
            </ul>
          </div>

          

          {/* Social & Subscription */}
          <div>
            <h3 className="font-semibold">Follow us</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>Figma</li>
            </ul>
            
          </div>

          <div>
          <img className="object-cover h-12" src="/Frame.png" alt="" />
          <h3 className="font-semibold mt-5">Get latest updates</h3>
          <input
              type="email"
              placeholder="Your email"
              className="mt-2 px-2 py-1 text-white border rounded-4xl"
            />
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 mt-10">
          Created by Shadient.co
        </div>
      </div>
    </footer>
  );
};

export default Footer;