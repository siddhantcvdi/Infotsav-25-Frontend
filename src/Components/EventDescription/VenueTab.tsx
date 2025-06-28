import React from "react";

type VenueTabProps = {
  venue: string;
};

const VenueTab: React.FC<VenueTabProps> = ({ venue }) => {
  return (
    <div className="text-center">
      <p className="text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl leading-relaxed">
        {venue}
      </p>
    </div>
  );
};

export default VenueTab;
