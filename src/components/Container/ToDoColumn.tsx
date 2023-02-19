import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";

import ColumnCard from "./ColumnCard";

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
const toDos = ["a", "b", "c", "d", "e", "f"];

function ToDoColumn() {
  const onDragEnd = () => {
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one" direction="vertical">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {toDos.map((toDo, index) => (
                <Draggable draggableId={toDo} index={index}>
                  {(provided) => (
                    <ColumnCard
                      provided={provided}
                      toDo={toDo}
                      style={getStyle(provided.draggableProps.style!)}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
export default ToDoColumn;
