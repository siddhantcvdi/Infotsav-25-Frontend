interface Event {
  id: number;
  name: string;
  category: string;
  about: string;
  img?: string;
  prize?: string;
  date?: string;
  fee?: number;
  contact?: Array<{
    name: string;
    phone: string;
    email: string;
  }>;
}

interface EventCardProps {
  event: Event;
}

export const MinorEventCard = ({ event }: EventCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full group cursor-pointer transition-all duration-300 hover:scale-105">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={event.img || "https://via.placeholder.com/400x300"}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Initial State - Just event name with localized blur */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl px-6 py-3 transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-black/50">
          <h3 className="text-xl font-bold text-white text-center font-pixelify">
            {event.name}
          </h3>
        </div>
      </div>
      
      {/* Hover State - Complete blur with details */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 delay-150 flex flex-col justify-center items-center p-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center font-pixelify">
          {event.name}
        </h3>
        
        <p className="text-gray-200 text-sm text-center mb-4 line-clamp-2">
          {event.about}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-xs">
          {event.prize && (
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
              Prize: ₹{event.prize}
            </span>
          )}
          
          {event.fee !== undefined && (
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
              {event.fee === 0 ? "Free" : `Fee: ₹${event.fee}`}
            </span>
          )}
          
          {event.date && (
            <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
              {new Date(event.date).toLocaleDateString()}
            </span>
          )}
        </div>
        
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-colors duration-200 font-pixelify text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};
