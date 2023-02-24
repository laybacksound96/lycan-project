import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { CharacterState } from "../../atoms";
import DraggableName from "./DraggableName";

//일단 임시로 해놓자고
interface ICardProps {
  boardId: string;
}

const Area = styled.div`
  color: ${(props) => props.theme.textColor};
  font-weight: 500;
  flex-grow: 1;

  transition: background-color 0.2s ease-in-out;
`;

function DroppableSpace({ boardId }: ICardProps) {
  const user = useRecoilValue(CharacterState);
  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <Area ref={provided.innerRef} {...provided.droppableProps}>
          {user.map((value, index) => (
            <DraggableName
              boardId={value.CharacterName}
              value={value.CharacterName}
              index={index}
              check={value.Check}
              key={value.CharacterName}
            />
          ))}
          {provided.placeholder}
        </Area>
      )}
    </Droppable>
  );
}
export default React.memo(DroppableSpace);
