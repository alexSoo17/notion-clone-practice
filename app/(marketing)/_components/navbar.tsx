"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Login from "./login";

const NavBar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 fixed top-0 bg-background flex items-center w-full p-6",
        scrolled && "border-b shadow-md"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-5">
        <ModeToggle />
        <Login />
      </div>
    </div>
  );
};

export default NavBar;
