import { useRef } from "react";
import TestimonialCard from "./TestomonialCard";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    position: "Manager",
    company: "Manam",
    message: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Esther Howard",
    position: "Marketing Head",
    company: "Offmax",
    message: "Vitae tellus bibendum nibh integer auctor pretium sed.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Arlene McCoy",
    position: "CEO",
    company: "Bloopixel",
    message: "Eu eu eget lorem commodo sagittis enim in viverra.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Jane Cooper",
    position: "Designer",
    company: "Unapixel",
    message: "Amet aliquam, volutpat nisl, duis sed at.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Arlene McCoy",
    position: "CEO",
    company: "Bloopixel",
    message: "Eu eu eget lorem commodo sagittis enim in viverra.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Arlene McCoy",
    position: "CEO",
    company: "Bloopixel",
    message: "Eu eu eget lorem commodo sagittis enim in viverra.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const TestimonialsMarquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative lg:w-full overflow-hidden">
      <h2 className="text-white text-2xl font-semibold text-center mb-8">Hear what our customers say:</h2>
      
      <div className="flex gap-4 overflow-x-scroll hide-scroll" ref={scrollRef}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black hidden lg:flex text-white p-2 rounded-full"
        onClick={scrollLeft}
      >
        ◀
      </button>
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black hidden lg:flex text-white p-2 rounded-full"
        onClick={scrollRight}
      >
        ▶
      </button>
    </div>
  );
};

export default TestimonialsMarquee;