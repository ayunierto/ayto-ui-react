import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const navbarVariants = cva(
  "fixed px-2 w-full flex items-center flex-row justify-between z-50 backdrop-blur-md",
  {
    variants: {
      variant: {
        fixed: "",
      },
      size: {
        small: "h-14",
        medium: "h-16",
        large: "h-18",
      },
    },
    defaultVariants: {
      variant: "fixed",
      size: "medium",
    },
  }
);

const Navbar = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadElement> & VariantProps<typeof navbarVariants>
>(({ className, variant, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(navbarVariants({ variant }), className)}
    {...props}
  />
));

const NavbarRightItems = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("flex flex-row items-center gap-2", className)}
  />
));

const NavbarLeftItems = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row items-center gap-2", className)}
    {...props}
  />
));

export { Navbar, NavbarRightItems, NavbarLeftItems };
