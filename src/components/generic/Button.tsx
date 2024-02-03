import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

//This function should check whether a className prop has been passed
//If so, override the default styling
const style = (className: string | undefined) => {
  if (className != undefined) return className;
  else
    return "py-[16px] px-[16px] bg-light-primary-main hover:bg-light-primary-hover active:bg-light-primary-active hover:outline hover:outline-light-text outline:border-2 dark:bg-dark-primary-main dark:hover:bg-dark-primary-hover dark:active:bg-dark-primary-active dark:hover:outline-dark-text text-light-text dark:text-light-text rounded-lg";
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
