import styled from "styled-components";
import ToDoColumn from "../components/ToDoFrame/Column/ToDoColumn";
import CheckBoxRow from "../components/ToDoFrame/Row/CheckBoxRow";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 720px;
  height: 90%;
  border-radius: 15px;
  margin-top: 150px;
  border-radius: 15px;
`;

function CheckBox() {
  return (
    <Container>
      <CheckBoxRow />
      <ToDoColumn />
    </Container>
  );
}

export default CheckBox;
