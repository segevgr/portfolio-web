import FadeOnScroll from "./FadeOnScroll";

const SectionContainer = ({ id, children, title, additionalStyle = "" }) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center my-5 md:mt-20 relative ${additionalStyle}`}
    >
      <FadeOnScroll>
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[25px] md:text-[35px] font-bold mb-3 text-primary">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
      </FadeOnScroll>
      {children}
    </section>
  );
};

export default SectionContainer;
