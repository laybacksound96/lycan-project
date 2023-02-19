import {
  DraggableProvided,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

interface IColumnCardProp {
  toDo: string;
  provided: DraggableProvided;
  style: DraggingStyle | NotDraggingStyle;
}

function ColumnCard({ provided, style, toDo }: IColumnCardProp) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      style={style}
    >
      {toDo}
    </div>
  );
}
export default ColumnCard;
