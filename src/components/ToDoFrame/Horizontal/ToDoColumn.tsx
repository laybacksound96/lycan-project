import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { CharacterState } from "../../../atoms";

import DroppableSpace from "./DroppableSpace";

function ToDoColumn() {
  const setChars = useSetRecoilState(CharacterState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setChars((prev) => {
        const boardCopy = [...prev];
        const copiedObject = { ...boardCopy[source.index] };
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, copiedObject);
        return [...boardCopy];
      });
    }
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableSpace boardId={"계정컨테이너의id이므로나중에수정"} />
    </DragDropContext>
  );
}
export default ToDoColumn;
