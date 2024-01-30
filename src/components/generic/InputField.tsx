import { InputHTMLAttributes, forwardRef } from "react";

interface InputField extends InputHTMLAttributes<HTMLInputElement> {
  labelStyle?: string;
  inputStyle?: string;
  label: string;
}

const setLabelStyle = (labelStyle: string | undefined) => {
  if (labelStyle != undefined) return labelStyle;
  else return "tracking-wider";
};
const setInputStyle = (inputStyle: string | undefined) => {
  if (inputStyle != undefined) return inputStyle;
  else return "bg-light-input rounded-md p-[16px] w-full";
};

const InputField = forwardRef<HTMLInputElement, InputField>(({ ...props }) => {
  return (
    <>
      <div>
        <label className={setLabelStyle(props.labelStyle)} htmlFor={props.name}>
          {props.label}
        </label>
      </div>
      <input
        className={setInputStyle(props.inputStyle)}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
      />
    </>
  );
});

export default InputField;
