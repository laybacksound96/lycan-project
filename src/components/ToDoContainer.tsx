import styled from "styled-components";

import ToDoColumn from "./Container/ToDoColumn";
import CheckBoxRow from "./Container/CheckBoxRow";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9eaa88;
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
