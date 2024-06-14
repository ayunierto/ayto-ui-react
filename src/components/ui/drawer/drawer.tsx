import { HTMLAttributes, createContext, forwardRef, useContext } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useActionController } from "../../hooks";

const drawerVariants = cva(
  "inline-flex z-30 p-2 gap-2 flex-col justify-between transition-all w-full md:max-w-[340px] fixed bg-white dark:bg-neutral-800 md:relative md:bg-transparent dark:md:bg-transparent h-screen "
);

interface DrawerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
  isOpen: boolean;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, isOpen, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `${isOpen ? "translate-x-0" : "-translate-x-full"}`,
        drawerVariants(),
        className
      )}
      {...props}
    />
  )
);

const DrawerHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center gap-5 hover:bg-hover p-3 rounded-lg ",
        className
      )}
      {...props}
    />
  )
);

interface DrawerHeaderImgProps {
  src?: string;
}

const DrawerHeaderImg = forwardRef<
  HTMLImageElement,
  HTMLAttributes<HTMLImageElement> & DrawerHeaderImgProps
>(({ className, src, ...props }, ref) => {
  const imgToShow = src ? src : "https://ui-avatars.com/api/?name=John+Doe";

  return (
    <img
      ref={ref}
      src={imgToShow}
      alt="avatar"
      className={cn("w-14 h-14 flex items-center rounded-full", className)}
      {...props}
    />
  );
});

const DrawerHeaderInfo = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col", className)} {...props} />
));

const DrawerHeaderInfoName = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-lg font-medium", className)} {...props} />
));

const DrawerHeaderInfoEmail = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-sm text-[#888]", className)} {...props} />
));

const DrawerMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1 h-full overflow-y-scroll", className)}
      {...props}
    />
  )
);

const DrawerFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
);

interface DraweMenuDropdownProps {
  isOpen: boolean;
  toggle: () => void;
}

export const DraweMenuDropdownContext = createContext(
  {} as DraweMenuDropdownProps
);
const { Provider } = DraweMenuDropdownContext;

const DrawerMenuDropdown = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: (args: DraweMenuDropdownProps) => JSX.Element;
  }
>(({ className, children, ...props }, ref) => {
  const { toggle, isOpen } = useActionController(false);
  return (
    <Provider value={{ toggle, isOpen }}>
      <div
        ref={ref}
        className={cn("", className)}
        children={children({ toggle, isOpen })}
        {...props}
      />
    </Provider>
  );
});

const DrawerMenuDropdownTrigger = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { toggle } = useContext(DraweMenuDropdownContext);
  return (
    <div ref={ref} className={cn(className)} onClick={toggle} {...props} />
  );
});

const DrawerMenuDropdownList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useContext(DraweMenuDropdownContext);
  return (
    <div
      ref={ref}
      className={cn(
        `flex flex-col gap-1 mt-1 ${isOpen ? "h-full" : "h-0 opacity-0"}`,
        className
      )}
      {...props}
    />
  );
});

export {
  Drawer,
  DrawerHeader,
  DrawerHeaderImg,
  DrawerHeaderInfo,
  DrawerHeaderInfoName,
  DrawerHeaderInfoEmail,
  DrawerMenu,
  DrawerFooter,
  DrawerMenuDropdown,
  DrawerMenuDropdownTrigger,
  DrawerMenuDropdownList,
};
