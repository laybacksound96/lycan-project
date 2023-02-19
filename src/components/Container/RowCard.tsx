import {
  DraggableProvided,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

interface IRowCardProp {
  Row: string;
  parentProvided: DraggableProvided;
  style: DraggingStyle | NotDraggingStyle;
}

function RowCard({ Row, parentProvided, style }: IRowCardProp) {
  return (
    <div
      ref={parentProvided.innerRef}
      {...parentProvided.dragHandleProps}
      {...parentProvided.draggableProps}
      style={style}
    >
      {Row}
    </div>
  );
}
export default RowCard;
