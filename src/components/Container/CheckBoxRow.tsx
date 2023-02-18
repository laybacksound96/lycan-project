import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const RowCard = styled.div`
  background-color: antiquewhite;
`;

const Row = ["A", "B", "C"];

function CheckBoxRow() {
  const onDragEnd = () => {
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", backgroundColor: "blue" }}>
        <div style={{ minWidth: "130px" }}> </div>
        <Droppable droppableId="one" direction="horizontal">
          {(magic) => (
            <ul
              style={{ display: "flex" }}
              ref={magic.innerRef}
              {...magic.droppableProps}
            >
              {Row.map((Row, index) => (
                <Draggable draggableId={Row} index={index}>
                  {(magic) => (
                    <RowCard
                      ref={magic.innerRef}
                      {...magic.dragHandleProps}
                      {...magic.draggableProps}
                    >
                      <div
                        style={{
                          minWidth: "50px",
                          textAlign: "center",
                          margin: 3,
                        }}
                      >
                        {Row}
                      </div>
                    </RowCard>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
export default CheckBoxRow;
