import { ReactNode } from "react";
import { AvatarContainer } from "./Avatar.styled";

const Avatar = ({ children }: { children: ReactNode }) => {
  return <AvatarContainer>{children}</AvatarContainer>;
};

export default Avatar;
