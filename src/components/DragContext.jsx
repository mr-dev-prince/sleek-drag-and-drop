import React, { useContext, useEffect } from "react";
import { DragDropContext } from "../context/DragDropContext.js";

export const DragContext = ({ content, className }) => {
  const { dragList, setDragList, setDraggedItem } =
    useContext(DragDropContext);

  const handleDragStart = (e, item) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", item);
    setDraggedItem(item);
  };

  useEffect(() => {
    const storedDragList = localStorage.getItem("dragList");
    if (storedDragList) {
      setDragList(JSON.parse(storedDragList));
    } else {
      setDragList(content);
    }
  }, [content, setDragList]);

  useEffect(() => {
    localStorage.setItem("dragList", JSON.stringify(dragList));
  }, [dragList]);

  return (
    <div className="h-full w-full">
      {dragList &&
        dragList.map((item) => (
          <div
            onDragStart={(e) => handleDragStart(e, item)}
            draggable
            key={item.id}
            id={item.id}
            className={` text-center ${className}`}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};

