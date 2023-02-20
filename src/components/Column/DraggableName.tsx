import { Draggable } from "react-beautiful-dnd";

interface INameProps {
  boardId: string;
  value: string;
  index: number;
}

function DraggableName({ boardId, value, index }: INameProps) {
  return (
    <Draggable draggableId={boardId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
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

export default DraggableName;
