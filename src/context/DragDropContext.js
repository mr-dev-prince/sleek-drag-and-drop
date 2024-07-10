import { createContext, useState } from "react";

export const DragDropContext = createContext(null);

export const DragDropContextProvider = ({ children }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragList, setDragList] = useState([]);
  const [dropList, setDropList] = useState([]);

  return (
    <DragDropContext.Provider
      value={{
        draggedItem,
        dragList,
        dropList,
        setDragList,
        setDraggedItem,
        setDropList,
      }}
    >
      {children}
    </DragDropContext.Provider>
  );
};
