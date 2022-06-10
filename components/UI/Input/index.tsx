import React from "react";

interface InputProps {
  inputValue: string | undefined;
  label?: string;
  icon?: JSX.Element;
  styles?: string;
  onInputChange: (inputValue: string) => void | undefined;
  onClickSubmit?: (inputString: string) => void | undefined;
}

const Input = ({
  inputValue,
  label,
  icon,
  styles,
  onInputChange,
  onClickSubmit,
}: InputProps) => {
  return (
    <div className="w-fit relative">
      <input
        className={
          "pl-5 pr-14 w-96 rounded-full bg-neutral-800 ring-1 ring-neutral-600/50 focus:ring-neutral-600/75 focus:outline-none " +
          (styles ? styles : "py-4")
        }
        type="text"
        value={inputValue}
        placeholder={label}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
      {onClickSubmit ? (
        <button
          className="absolute p-2 text-xl -translate-y-1/2 top-1/2 right-2  bg-stone-900 ring-1 ring-neutral-600/50 rounded-full transition-all hover:text-green-400 hover:scale-110"
          onClick={() => {
            onClickSubmit(inputValue ? inputValue : "");
          }}
        >
          {icon}
        </button>
      ) : null}
    </div>
  );
};

export default Input;
