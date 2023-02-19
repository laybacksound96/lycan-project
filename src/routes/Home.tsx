import styled from "styled-components";
import ToDoContainer from "../components/ToDoContainer";
const MainFrame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ToDoFrame = styled.div`
  background-color: #c5c5c5;
  width: 720px;
`;
const HeaderContainer = styled.div`
  background-color: #aabbcb;
  width: inherit;
  height: 10%;
  border-radius: 15px;
  margin-bottom: 15px;
`;

function Home() {
  return (
    <MainFrame>
      <ToDoFrame>
        <HeaderContainer />
        <ToDoContainer />
      </ToDoFrame>
    </MainFrame>
  );
}

export default Home;
