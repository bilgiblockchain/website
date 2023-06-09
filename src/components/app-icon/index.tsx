import React from "react";
import { Avatar, AvatarProps } from "@mantine/core";

export const AppIcon: React.FC<AvatarProps> = (props) => {
  return <Avatar src={`/images/logo.svg`} radius={props.size} {...props} />;
};
