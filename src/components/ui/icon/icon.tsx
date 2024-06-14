import { HTMLAttributes, forwardRef } from "react";
import { IconNames } from "./types";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const iconVariants = cva(
  "transition-all font-thin p-1 rounded-lg select-none",
  {
    variants: {
      size: {
        sm: "text-[20px]",
        md: "text-[26px]",
        lg: "text-[34px]",
      },
    },
  }
);
interface IconProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof iconVariants> {
  hoverable?: boolean;
  /**
   * Available icons in
   * @see https://marella.me/material-symbols/demo/
   */
  icon: IconNames;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ className, icon, size, hoverable = false }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          `material-symbols-outlined ${hoverable ? "hover:bg-hover" : ""}`,
          iconVariants({ size }),
          className
        )}
      >
        {icon}
      </span>
    );
  }
);

export { Icon };
