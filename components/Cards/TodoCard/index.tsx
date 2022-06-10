import React from "react";
import Button from "../../UI/Button";
import { RiCheckFill, RiCloseFill, RiPencilFill } from "react-icons/ri";

interface todoItemTypes {
  onDate: Date;
  todo: string;
  isComplete: boolean;
}

interface PropsTypes {
  todoItem: todoItemTypes;
  onCompleteClick: () => void;
  onTogglePopup: () => void;
  onRemoveClick: () => void;
}

const TodoCard = ({
  todoItem,
  onCompleteClick,
  onTogglePopup,
  onRemoveClick,
}: PropsTypes) => {
  return (
    <div className="p-4 w-96 grid grid-flow-col auto-cols-max items-center justify-between bg-neutral-800 ring-1 ring-neutral-600/50 rounded-full gap-4">
      <div className="grid grid-flow-col auto-cols-max gap-4 ">
        <p>
          {todoItem.onDate.getDate()} / {todoItem.onDate.getMonth()}
        </p>
        <p className="w-52 truncate ">{todoItem.todo}</p>
      </div>
      <div className="grid grid-flow-col auto-cols-max gap-1">
        {!todoItem.isComplete ? (
          <>
            <Button
              styles="bg-green-500"
              icon={<RiCheckFill />}
              onClick={onCompleteClick}
            />
            <Button
              styles="bg-yellow-400"
              icon={<RiPencilFill />}
              onClick={onTogglePopup}
            />
          </>
        ) : null}
        <Button
          styles="bg-red-500"
          icon={<RiCloseFill />}
          onClick={onRemoveClick}
        />
      </div>
    </div>
  );
};

export default TodoCard;
