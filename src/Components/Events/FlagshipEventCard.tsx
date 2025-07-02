import { motion } from "framer-motion";

interface FlagshipEvent {
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
  description?: {
    overview: string;
    rules: Record<string, unknown>;
  };
}

interface FlagshipEventCardProps {
  event: FlagshipEvent;
  isActive: boolean;
}

export const FlagshipEventCard = ({ event, isActive }: FlagshipEventCardProps) => {
  return (
    <motion.div
      animate={{
        scale: isActive ? 0.95 : 0.85,
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className="relative aspect-video w-full h-full shrink-0 rounded-xl bg-neutral-800 object-cover overflow-hidden shadow-lg border border-gray-700"
    >
      {/* Background Image */}
      {event.img ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${event.img})`,
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-red-700" />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 text-xs bg-red-600 rounded-full">
              {event.category}
            </span>
            {event.prize && (
              <span className="px-2 py-1 text-xs bg-yellow-600 rounded-full">
                Prize: {event.prize}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold">{event.name}</h3>
          <p className="text-sm text-gray-200 overflow-hidden text-ellipsis max-w-full" 
             style={{
               display: '-webkit-box',
               WebkitLineClamp: 2,
               WebkitBoxOrient: 'vertical' as const,
               overflow: 'hidden'
             }}>
            {event.about}
          </p>
          {event.date && (
            <p className="text-xs text-gray-300">Date: {event.date}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
