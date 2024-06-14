import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative flex items-center gap-2 w-full rounded-lg border",
  {
    variants: {
      variant: {
        primary: "bg-blue-500/10",
        success: "bg-green-500/10",
        warning: "bg-orange-500/10",
        error: "bg-red-500/10",
      },
      size: {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, size, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, size }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

export { Alert };
