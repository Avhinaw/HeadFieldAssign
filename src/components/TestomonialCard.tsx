interface TestimonialProps {
    name: string;
    position: string;
    company: string;
    message: string;
    image: string;
  }
  
  const TestimonialCard: React.FC<TestimonialProps> = ({ name, position, company, message, image }) => {
    return (
      <div className="min-w-[300px] max-w-[350px] min- bg-gray-900 text-white py-2 px-3 lg:p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="flex items-center gap-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-full border border-gray-500" />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-400">{position} • {company}</p>
          </div>
        </div>
        <p className="mt-3 text-gray-300">{message}</p>
      </div>
    );
  };
  
  export default TestimonialCard;