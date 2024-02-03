import { TextareaHTMLAttributes, forwardRef } from "react";

interface InputArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelStyle?: string;
  inputStyle?: string;
  label: string;
}

const setLabelStyle = (labelStyle: string | undefined) => {
  if (labelStyle != undefined) return labelStyle;
  else return "text-light-text dark:text-dark-text";
};

const setInputStyle = (inputStyle: string | undefined) => {
  if (inputStyle != undefined) return inputStyle;
  else
    return "bg-light-input rounded-md w-full h-[200px] p-[16px] dark:text-light-text";
};

const InputArea = forwardRef<HTMLTextAreaElement, InputArea>(({ ...props }) => {
  return (
    <>
      <div>
        <label htmlFor={props.name} className={setLabelStyle(props.labelStyle)}>
          {props.label}
        </label>
      </div>
      <textarea
        className={setInputStyle(props.inputStyle)}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
});

export default InputArea;
