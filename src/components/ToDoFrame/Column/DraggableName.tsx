import React from "react";
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { ICheck } from "../../../atoms";
import Checkbox from "./CheckBox";

interface INameProps {
  boardId: string;
  value: string;
  index: number;
  check: ICheck[];
}

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

function DraggableName({ boardId, value, check, index }: INameProps) {
  return (
    <Draggable draggableId={boardId} index={index}>
      {(provided) => (
        <NameBox
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={AxisLocker(provided.draggableProps.style!)}
        >
          <Name {...provided.dragHandleProps}>{value}</Name>

          {check.map((check) => (
            <Checkbox key={check.checkName} isChecked={check.isChecked} />
          ))}
        </NameBox>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableName);
