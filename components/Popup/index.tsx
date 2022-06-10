import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import { RiCloseFill } from "react-icons/ri";
import Input from "../UI/Input";

interface todoItemTypes {
  onDate: Date;
  todo: string;
  isComplete: boolean;
}

interface PropsTypes {
  todoItem: todoItemTypes | undefined;
  onTogglePopup: () => void;
}

const Popup = ({ todoItem, onTogglePopup }: PropsTypes) => {
  const [changedValue, setChangedValue] = useState<string>(
    todoItem ? todoItem.todo : ""
  );

  useEffect(() => {
    todoItem ? (todoItem.todo = changedValue) : null;
  }, [todoItem, changedValue]);

  const onChangeTodo = (eventValue: string) => {
    setChangedValue(eventValue);
  };

  return (
    <div className="w-full h-full grid content-center justify-center bg-neutral-400/20 z-20 absolute">
      <div className="p-2 w-[26rem] h-fit bg-neutral-800 ring-1 ring-neutral-600/50 rounded-md relative">
        <div className="grid gap-4">
          <p>Task</p>
          <div className="grid grid-flow-col auto-cols-max items-center gap-4">
            <p>Todo:</p>
            <Input
              inputValue={changedValue}
              styles="py-2 w-80"
              onInputChange={onChangeTodo}
            />
          </div>
        </div>
        <Button
          styles="bg-red-500 absolute top-2 right-2"
          icon={<RiCloseFill />}
          onClick={onTogglePopup}
        />
      </div>
    </div>
  );
};

export default Popup;
