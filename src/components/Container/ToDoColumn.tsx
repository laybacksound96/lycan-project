import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #b2ca85;
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

function ToDoColumn() {
  const onDragEnd = () => {
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <Draggable draggableId={toDo} index={index}>
                  {(magic) => (
                    <Card
                      ref={magic.innerRef}
                      {...magic.dragHandleProps}
                      {...magic.draggableProps}
                    >
                      <div style={{ minWidth: "130px" }}>{toDo}</div>

                      <input type="checkbox" style={{ minWidth: "50px" }} />
                      <input type="checkbox" style={{ minWidth: "50px" }} />
                      <input type="checkbox" style={{ minWidth: "50px" }} />
                    </Card>
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
export default ToDoColumn;
