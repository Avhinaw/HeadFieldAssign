
interface MarqueeBoxProps {
    icon: string;
    title: string;
  }
   
const MarqueeBox: React.FC<MarqueeBoxProps> = ({ icon, title }) => {
  return (
    <div className='border rounded-md px-2 lg:px-5 py-4'>
        <img className="sm:h-5 sm:w-5" src={icon} alt={title} />
    </div>
  )
}

export default MarqueeBox