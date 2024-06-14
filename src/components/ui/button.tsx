import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[#ffffff70] border border-[#00000009] border-b-[#00000020] hover:bg-hover dark:bg-[#ffffff08]  dark:border-[#ffffff08] dark:hover:bg-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        primary: "bg-primary text-white hover:opacity-90",
        ghost: "hover:bg-hover dark:hover:bg-hover",
      },
      size: {
        sm: "min-h-9 max-h-9 px-3",
        md: "min-h-10 max-h-10 px-4",
        lg: "min-h-11 max-h-11 px-8",
        icon: "h-10 w-10",
      },
      justify: {
        center: "justify-center",
        left: "justify-start",
        right: "justify-end",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      justify: "center",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
