interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
      <section className="px-4 lg:px-32 py-10">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {children}
      </section>
    );
  };
  
  export default Section;