"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { LogOut, Mail, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { status, data: session } = useSession();
  if (status === "loading")
    return <Skeleton className="w-10 h-10 rounded-full" />;
  if (status === "unauthenticated")
    return <Link href="/api/auth/signin">Login</Link>;

  return (
    status === "authenticated" && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-md">My accout</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User />
            <span className="ml-3">{session?.user?.name}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail />
            <span className="ml-3">{session?.user?.email}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/api/auth/signout">
              <div className="flex items-center gap-3">
                <LogOut className="inline-block" />
                <span>Logout</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};

export default Login;
