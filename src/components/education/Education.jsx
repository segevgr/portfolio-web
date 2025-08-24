import React from "react";
import FadeOnScroll from "../utilComponents/FadeOnScroll";
import SectionContainer from "../utilComponents/SectionContainer";
import { layoutWidth, secondaryTitle } from "../../utils/layout";
import { educationData } from "./educationData";

const Education = () => {
  return (
    <SectionContainer
      id="education"
      title={"My Education"}
      additionalStyle={"mt-16 md:mt-28"}
    >
      <div className={`px-5 flex flex-col items-start ${layoutWidth}`}>
        {educationData.map((item, index) => (
          <FadeOnScroll key={index}>
            <div
              className={`relative rounded-2xl p-5 md:p-6 shadow-xl bg-backgroundSoft
                ${index !== 0 ? "mt-8 md:mt-10" : ""}
              `}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl bg-secondary/20 text-primary"
                    aria-hidden
                  >
                    🎓
                  </div>
                  <p className="text-xl text-secondary truncate font-semibold">
                    {item.place}
                  </p>
                </div>

                <span className="px-2 py-1 rounded-full text-xs bg-badgeBg text-badgeText border border-badgeBorder">
                  {item.years}
                </span>
              </div>

              <div className={`mt-2 text-xl md:text-3xl ${secondaryTitle}`}>
                {item.title}
              </div>

              {item.technologies?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full text-xs bg-badgeBg text-badgeText border border-badgeBorder"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Education;
