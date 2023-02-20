import {
  DraggableProvided,
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import styled from "styled-components";

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
interface ICardProp {
  toDo: string;
  provided: DraggableProvided;
  style: DraggingStyle | NotDraggingStyle;
}

//일단 임시로 해놓자고
interface ICardProps {
  key: string;
  boardId: string;
  toDos: string;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
`;

function Card({ boardId, key, toDos }: ICardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <Area
          isDraggingOver={snapshot.isDraggingOver}
          isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
        ></Area>
      )}
    </Droppable>
  );
}
export default Card;
