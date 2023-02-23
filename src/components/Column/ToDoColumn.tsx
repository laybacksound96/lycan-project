import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { CharacterState } from "../../atoms";

import DroppableSpace from "./DroppableSpace";

function ToDoColumn() {
  const setChars = useSetRecoilState(CharacterState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setChars((prev) => {
        /*
        #01오브젝트의 Re-Order 구현은 어떻게...?

        전략 :: source.index는 내가 잡은 object의 index를 반환한다.
                이 index값을 이용하여 복사한 object에서 오브젝트 카피본을 만들어서 붙여보자
        
        */

        const boardCopy = [...prev];

        const copiedObject = { ...boardCopy[source.index] };

        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, copiedObject);
        return [...boardCopy];
      });
    }
    return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableSpace boardId={"수정해야돼"} />
    </DragDropContext>
  );
}
export default ToDoColumn;
