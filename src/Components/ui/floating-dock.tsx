import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  orientation = "horizontal",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} orientation={orientation} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  orientation = "horizontal",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);
  
  const isVertical = orientation === "vertical";
  
  return (
    <motion.div
      onMouseMove={(e) => {
        if (isVertical) {
          mouseY.set(e.pageY);
        } else {
          mouseX.set(e.pageX);
        }
      }}
      onMouseLeave={() => {
        if (isVertical) {
          mouseY.set(Infinity);
        } else {
          mouseX.set(Infinity);
        }
      }}
      className={cn(
        isVertical
          ? "mx-auto hidden w-16 items-center gap-4 rounded-2xl bg-neutral-900 py-4 px-3 md:flex md:flex-col border border-neutral-700"
          : "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-neutral-900 px-4 pb-3 md:flex border border-neutral-700",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer 
          mouseX={mouseX} 
          mouseY={mouseY}
          key={item.title} 
          orientation={orientation}
          {...item} 
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  mouseY,
  title,
  icon,
  href,
  orientation = "horizontal",
}: {
  mouseX: MotionValue;
  mouseY?: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  orientation?: "horizontal" | "vertical";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isVertical = orientation === "vertical";
  const mousePosition = isVertical ? mouseY || mouseX : mouseX;

  const distance = useTransform(mousePosition, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
    
    if (isVertical) {
      return val - bounds.y - bounds.height / 2;
    } else {
      return val - bounds.x - bounds.width / 2;
    }
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-neutral-800 border border-neutral-600"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ 
                opacity: 0, 
                y: isVertical ? 0 : 10, 
                x: isVertical ? 10 : "-50%" 
              }}
              animate={{ 
                opacity: 1, 
                y: isVertical ? 0 : 0, 
                x: isVertical ? 0 : "-50%" 
              }}
              exit={{ 
                opacity: 0, 
                y: isVertical ? 0 : 2, 
                x: isVertical ? 10 : "-50%" 
              }}
              className={cn(
                "absolute w-fit rounded-xl border border-neutral-600 bg-neutral-800 px-3 py-1 text-xs whitespace-nowrap text-white shadow-lg",
                isVertical 
                  ? "left-full top-1/2 -translate-y-1/2 ml-2" 
                  : "-top-8 left-1/2 -translate-x-1/2"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
