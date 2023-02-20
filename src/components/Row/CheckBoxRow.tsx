import {
  DragDropContext,
  Draggable,
  Droppable,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

import RowCard from "./RowCard";

const Row = ["A", "B", "C"];

function getStyle(style: DraggingStyle | NotDraggingStyle) {
  if (style?.transform) {
    const axisLockX = `${style.transform.split(",").shift()}, 0px)`;
    return {
      ...style,
      transform: axisLockX,
    };
  }
  return style;
}
function CheckBoxRow() {
  const onDragEnd = () => {
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", backgroundColor: "blue" }}>
        <div style={{ minWidth: "130px" }}> </div>
        <Droppable droppableId="one" direction="horizontal">
          {(provided) => (
            <ul
              style={{ display: "flex" }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {Row.map((Row, index) => (
                <Draggable draggableId={Row} index={index}>
                  {(provided) => (
                    <RowCard
                      Row={Row}
                      parentProvided={provided}
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
export default CheckBoxRow;
