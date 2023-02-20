import React from "react";
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

interface INameProps {
  boardId: string;
  value: string;
  index: number;
}

function AxisLocker(style: DraggingStyle | NotDraggingStyle) {
  if (style?.transform) {
    const axisLockY = `translate(0px,${style.transform.split(",").pop()}`;

    return {
      ...style,
      transform: axisLockY,
    };
  }
  return style;
}

function DraggableName({ boardId, value, index }: INameProps) {
  return (
    <Draggable draggableId={boardId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          style={AxisLocker(provided.draggableProps.style!)}
        >
          {value}
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableName);
