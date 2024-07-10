import React, { useContext, useEffect } from "react";
import { DragDropContext } from "../context/DragDropContext.js";

export const DropContext = ({ className, deleteKey }) => {
  const { draggedItem, dropList, setDropList, setDragList } =
    useContext(DragDropContext);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem && !dropList.find((item) => item.id === draggedItem.id)) {
      const newDropList = [...dropList, draggedItem];
      setDropList(newDropList);
      setDragList((prevList) =>
        prevList.filter((item) => item.id !== draggedItem.id)
      );

      localStorage.setItem("dropList", JSON.stringify(newDropList));
    }
  };

  const handleDelete = (item) => {
    const updatedDropList = dropList.filter((dropItem) => dropItem !== item);
    setDropList(updatedDropList);
    setDragList((prevList) => [...prevList, item]);
    localStorage.setItem("dropList", JSON.stringify(updatedDropList));
  };

  useEffect(() => {
    const storedDropList = localStorage.getItem("dropList");
    if (storedDropList) {
      setDropList(JSON.parse(storedDropList));
    }
  }, [setDropList]);

  return (
    <div
      className="min-h-[100px] min-w-[100px] outline"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {dropList &&
        dropList.map((item, idx) => (
          <div
            key={idx}
            id={item.id}
            className={` ${
              deleteKey ? `flex justify-between items-center` : `text-center`
            } ${className}`}
          >
            {item.name}
            {deleteKey && <button onClick={() => handleDelete(item)}>x</button>}
          </div>
        ))}
    </div>
  );
};
