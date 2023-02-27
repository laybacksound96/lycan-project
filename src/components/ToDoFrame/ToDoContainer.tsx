import styled from "styled-components";

import ToDoColumn from "./Column/ToDoColumn";
import CheckBoxRow from "./Row/CheckBoxRow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  height: 90%;
  border-radius: 15px;
`;

function ToDoContainer() {
  return (
    <Container>
      <CheckBoxRow />
      <ToDoColumn />
    </Container>
  );
}

export default ToDoContainer;
