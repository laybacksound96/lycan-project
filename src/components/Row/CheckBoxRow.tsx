import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DraggingStyle,
  NotDraggingStyle,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { CharacterState, RowState } from "../../atoms";

import RowCard from "./RowCard";

function AxisLocker(style: DraggingStyle | NotDraggingStyle) {
  if (style?.transform) {
    const axisLockX = `${style.transform.split(",").shift()}, 0px)`;
    return {
      ...style,
      transform: axisLockX,
    };
  }
  return style;
}
const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 20px;
  border-radius: 5px;
`;
function CheckBoxRow() {
  const setChars = useSetRecoilState(CharacterState);
  const [Row, setRows] = useRecoilState(RowState);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setRows((prev) => {
        const boardCopy = [...prev];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return [...boardCopy];
      });

      /* 
      @todo : code refactoring needs
      */

      setChars((prev) => {
        const boardCopy = [...prev];
        const newArray = [];
        for (var i = 0; i < boardCopy.length; i++) {
          const checkCopy = [...boardCopy[i]["check"]];
          const copiedObject = { ...checkCopy[source.index] };
          checkCopy.splice(source.index, 1);
          checkCopy.splice(destination?.index, 0, copiedObject);
          const newObject = {
            CharacterName: boardCopy[i]["CharacterName"],
            check: checkCopy,
          };
          newArray.push(newObject);
        }
        return newArray;
      });
    }
    return;
  };
  return (
    // @todo 스타일컴포넌트로 아직 안뺌
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", color: "#A2B3D7" }}>
        <Name />
        <Droppable droppableId="one" direction="horizontal">
          {(provided) => (
            <div
              style={{ display: "flex" }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {Row.map((Row, index) => (
                <Draggable draggableId={Row} index={index} key={Row}>
                  {(provided) => (
                    <RowCard
                      Row={Row}
                      parentProvided={provided}
                      style={AxisLocker(provided.draggableProps.style!)}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
export default React.memo(CheckBoxRow);
