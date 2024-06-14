import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const boxVariants = cva("", {
  variants: {
    display: {
      flex: "flex",
    },
    gap: {
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
    },
    wrap: {
      wrap: "flex-wrap",
      noWrap: "flex-nowrap",
    },
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    align: {
      start: "flex-start",
      center: "items-center",
      end: "flex-end",
    },
  },
  defaultVariants: {
    display: "flex",
    gap: 2,
    wrap: "wrap",
    direction: "row",
  },
});

const Flex = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>
>(({ className, display, gap, direction, align, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "item",
      boxVariants({ display, align, gap, direction }),
      className
    )}
    {...props}
  />
));

export { Flex };
