import styled from "styled-components";
import Horizontal from "../components/ToDoFrame/Horizontal/ToDoColumn";
import Vertical from "../components/ToDoFrame/Vertical/Vertical";

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
      <Vertical />
      <Horizontal />
    </Container>
  );
}

export default CheckBox;
