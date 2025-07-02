import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  type MotionProps,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, { type PropsWithChildren, useRef } from "react";

import { cn } from "../../lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "bg-gradient-to-r from-red-900/20 via-red-800/10 to-red-900/20 backdrop-blur-md border-red-700/20 mx-auto mt-8 flex items-center justify-center gap-2 rounded-2xl border p-8 py-16 shadow-2xl",
  {
    variants: {
      orientation: {
        horizontal: "h-[58px] w-max flex-row",
        vertical: "w-[58px] h-max flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      orientation = "horizontal",
      ...props
    },
    ref,
  ) => {
    const mousePosition = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (
          React.isValidElement<DockIconProps>(child) &&
          child.type === DockIcon
        ) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mousePosition,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
            orientation: orientation,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          if (orientation === "horizontal") {
            mousePosition.set(e.pageX);
          } else {
            mousePosition.set(e.pageY);
          }
          // Debug: uncomment to test mouse tracking
          // console.log(`Mouse ${orientation}: ${orientation === "horizontal" ? e.pageX : e.pageY}`);
        }}
        onMouseLeave={() => {
          mousePosition.set(Infinity);
        }}
        {...props}
        className={cn(dockVariants({ orientation, className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX: mousePosition,
  orientation = "horizontal",
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMousePosition = useMotionValue(Infinity);

  const distanceCalc = useTransform(mousePosition ?? defaultMousePosition, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
    if (orientation === "horizontal") {
      return val - bounds.x - bounds.width / 2;
    } else {
      return val - bounds.y - bounds.height / 2;
    }
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-red-700/20 hover:bg-red-600/30 border border-red-700/40 text-red-100 hover:text-red-300 shadow-lg transition-colors duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
