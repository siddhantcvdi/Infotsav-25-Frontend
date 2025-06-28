import React from "react";

type AboutTabProps = {
  about: string;
};

const AboutTab: React.FC<AboutTabProps> = ({ about }) => {
  return (
    <div className="text-center">
      <p className="text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl leading-relaxed">
        {about}
      </p>
    </div>
  );
};

export default AboutTab;
