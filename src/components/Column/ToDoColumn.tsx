import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { CharacterState } from "../../atoms";

import DroppableSpace from "./DroppableSpace";

function ToDoColumn() {
  const setChars = useSetRecoilState(CharacterState);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setChars((prev) => {
        const boardCopy = [...prev];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return [...boardCopy];
      });
    }
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableSpace boardId={"수정해야돼"} />
    </DragDropContext>
  );
}
export default ToDoColumn;
