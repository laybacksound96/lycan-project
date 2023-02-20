import React from "react";
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import styled from "styled-components";

interface INameProps {
  boardId: string;
  value: string;
  index: number;
}

// @todo2 width는 Row쪽 witdh와 공유해야 함
const ShareWidthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: ease-in-out 0.1s;
  }
`;
const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  padding-left: 5px;
  height: 50px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: ease-in-out 0.1s;
  }
`;
const NameBox = styled.div`
  display: flex;
`;

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
        <NameBox
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          style={AxisLocker(provided.draggableProps.style!)}
        >
          <Name>{value}</Name>
          <ShareWidthDiv>
            <input type="checkbox" />
          </ShareWidthDiv>
          <ShareWidthDiv>
            <input type="checkbox" />
          </ShareWidthDiv>
          <ShareWidthDiv>
            <input type="checkbox" />
          </ShareWidthDiv>
        </NameBox>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableName);
