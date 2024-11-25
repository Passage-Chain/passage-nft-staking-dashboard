import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utilis";

const shellVariants = cva("grid gap-[22pz]", {
  variants: {
    variant: {
      default:
        "container mx-auto w-full max-w-screen-2xl gap-10 px-3 py-3 md:py-[50px] md:px-4 lg:gap-[22px] lg:px-[45px]",
      center:
        "container mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-10 px-4 py-[100px] lg:px-[67px] lg:py-[150px]",
      mobile:
        "container mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 py-8",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

function Shell({ className, as: Comp = "div", variant, ...props }: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  );
}

export { Shell, shellVariants };
