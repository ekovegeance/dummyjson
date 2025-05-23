import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {LogOut} from "lucide-react";
import {type User} from "next-auth";

interface NavUser {

    signOut: () => void;
    user: User

}

export default  function NavUser({user, signOut}: NavUser) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="border">
                    <AvatarImage src={user.image ?? undefined }/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel asChild>
                    <div className="flex flex-col">
                        <p>{user.username}</p>
                        <p className="text-sm font-light">{user.email}</p>
                    </div>
                    </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem asChild>
                    <div>
                        <LogOut/>
                        <button className="text-sm" onClick={signOut}>Sign Out</button>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
}