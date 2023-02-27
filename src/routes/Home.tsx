import styled from "styled-components";
import CharSearchForm from "../components/ToDoFrame/CharSearchForm";
import ToDoContainer from "../components/ToDoFrame/ToDoContainer";

function Home() {
  return (
    <MainFrame
      onContextMenu={(e: any) => {
        e.preventDefault();
      }}
    >
      <HeaderFrame />
      <ToDoFrame>
        <CharSearchForm />
        <ToDoContainer />
      </ToDoFrame>
    </MainFrame>
  );
}

export default Home;

const MainFrame = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ToDoFrame = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 15px;
  width: 720px;
`;

const HeaderFrame = styled.div`
  width: inherit;
  height: 150px;
`;
