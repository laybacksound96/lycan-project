import {
  DragDropContext,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

import Card from "./DroppableSpace";

function getStyle(style: DraggingStyle | NotDraggingStyle) {
  if (style?.transform) {
    const axisLockY = `translate(0px,${style.transform.split(",").pop()}`;

    return {
      ...style,
      transform: axisLockY,
    };
  }
  return style;
}

function ToDoColumn() {
  const onDragEnd = () => {
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Card boardId={"수정해야돼"} toDos={"수정해야돼"} />
    </DragDropContext>
  );
}
export default ToDoColumn;
