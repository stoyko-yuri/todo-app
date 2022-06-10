import React from "react";

interface PropsTypes {
  styles?: string;
  icon: JSX.Element;
  onClick?: () => void;
}

const Button = ({ styles, icon, onClick }: PropsTypes) => {
  return (
    <div
      className={
        "p-px text-xl grid items-center jusitfy-center rounded-full cursor-pointer opacity-80 hover:opacity-100 " +
        styles
      }
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default Button;
