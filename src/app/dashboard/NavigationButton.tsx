'use client';

import Link from "next/link";
import { Button } from "@shared/shadcn/ui/button";
import { BsCalendar3 } from "react-icons/bs";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

interface IProps extends PropsWithChildren {
  path: string,
}

export const NavigationButton = (props: IProps) => {
  const pathname = usePathname()

  return (
    <Link href={props.path}>
      <Button size='icon' variant='secondary' className={`bg-none! rounded-full w-11 h-11 ${pathname.includes(props.path) ? '' : ' text-[#999] hover:bg-[#252525]'}`}>
        { props.children }
      </Button>
    </Link>
  )
}