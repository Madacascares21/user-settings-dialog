"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings2 } from "lucide-react";
import { useState } from "react";
import UserAvatar from "./user-avatar";

import SettingsDialog from "./settingsDialog";

const UserBTN = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar className="size-10" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuLabel>
            <div className="flex  gap-4 py-1 items-center justify-center">
              <UserAvatar className="size-11 " />
              <div className="flex flex-col">
                <span className="text-md">.auxload</span>
                <span className="text-xs text-muted-foreground">
                  gd69435@gmail.com
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpenDialog(true)}>
            <Settings2 />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <LogOut />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <SettingsDialog open={openDialog} onOpenChange={setOpenDialog} />
    </>
  );
};

export default UserBTN;
