import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

//This function should check whether a className prop has been passed
//If so, override the default styling
const style = (className: string | undefined) => {
  if (className != undefined) return className;
  else
    return "py-[16px] px-[16px] bg-light-primary dark:bg-dark-primary text-light-text dark:text-light-text rounded-lg";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={style(props.className)}>
        {props.children}
      </button>
    );
  }
);

export default Button;
