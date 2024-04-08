'use client';

import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { TooltipProvider } from "@shared/shadcn/ui/tooltip";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
     <NextThemesProvider
       defaultTheme='dark'
       disableTransitionOnChange
       attribute='class'
       enableSystem={false}
     >
       <>
         { children }
       </>
     </NextThemesProvider>
  )
}