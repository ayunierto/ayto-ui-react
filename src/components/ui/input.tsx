import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
  "transition-all border rounded-md border-b-[3px] flex items-center gap-2 justify-between focus-within:border-b-primary bg-[#ffffff80] hover:bg-[#00000001] hover:focus-within:bg-[#ffffff80] dark:hover:bg-[#ffffff15] dark:bg-[#ffffff10] dark:focus-within:bg-[#00000050] dark:hover:focus-within:bg-[#00000050] dark:focus-within:border-b-primary dark:border-b-[#ffffff10]",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        sm: "px-2 max-h-9 min-h-9",
        md: "px-3 max-h-10 min-h-10",
        lg: "px-4 max-h-11 min-h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, contentAfter, contentBefore, variant, size, ...props },
    ref
  ) => {
    return (
      <div className={cn("", inputVariants({ variant, size }), className)}>
        {contentBefore}
        <input
          ref={ref}
          {...props}
          className={cn("bg-transparent border-none w-full outline-none")}
        />
        {contentAfter}
      </div>
    );
  }
);

export { Input };
