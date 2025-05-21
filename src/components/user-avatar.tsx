import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProps } from "@radix-ui/react-avatar";
import { cn, delay } from "@/lib/utils";

interface UserAvatarProps
  extends React.ComponentProps<
    React.ForwardRefExoticComponent<
      AvatarProps & React.RefAttributes<HTMLSpanElement>
    >
  > {}

const UserAvatar =  ({ className, ...props }: UserAvatarProps) => {
  return (
    <Avatar className={cn(className, "cursor-pointer")} {...props}>
      <AvatarImage src="/images/a.jpg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
