import React from "react";
interface SocialButtonProps {
  children: React.ReactNode;
  to: string;
}
const SocialButton = ({ children, to }: SocialButtonProps) => {
  return (
    <button className="Btn">
      <span className="svgContainer">
        <a href={to}>{children}</a>
      </span>
      <span className="BG"></span>
    </button>
  );
};

export default SocialButton;
