import React from "react";
import FadeOnScroll from "../utilComponents/FadeOnScroll";
import CertificationCard from "./CertificationCard";
import certifications from "./data";
import SectionContainer from "../utilComponents/SectionContainer";

const Certifications = () => {
  const isOdd = certifications.length % 2 === 1;

  return (
    <SectionContainer id="Certifications" title={"Certifications"}>
      <FadeOnScroll>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {certifications.map((c, i) => {
            const isLast = i === certifications.length - 1;
            const wrapperClasses =
              isOdd && isLast ? "md:col-span-2 md:max-w-xl md:mx-auto" : "";

            return (
              <div key={c.id} className={wrapperClasses}>
                <CertificationCard cert={c} />
              </div>
            );
          })}
        </div>
      </FadeOnScroll>
    </SectionContainer>
  );
};

export default Certifications;
