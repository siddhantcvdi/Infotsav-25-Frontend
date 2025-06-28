import React from "react";

type TimeTabProps = {
  time: string;
};

const TimeTab: React.FC<TimeTabProps> = ({ time }) => {
  return (
    <div className="text-center">
      <p className="text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl leading-relaxed">
        {time}
      </p>
    </div>
  );
};

export default TimeTab;
