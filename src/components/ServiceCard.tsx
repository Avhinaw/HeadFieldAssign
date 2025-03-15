interface ServiceCardProps {
    icon: string;
    title: string;
    desc: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc }) => {
    return (
      <div className="bg-gray-900 p-6 border border-gray-700 rounded-lg shadow-lg flex flex-col items-start cursor-pointer hover:bg-gray-800">
        <img src={icon} alt={title} className="w-10 h-10 mb-4" />
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400 mt-2 w-68">{desc}</p>
      </div>
    );
  };
  
  export default ServiceCard;