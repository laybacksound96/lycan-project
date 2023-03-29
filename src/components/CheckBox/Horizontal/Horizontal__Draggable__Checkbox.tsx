import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

// @todo2 width는 Row쪽 witdh와 공유해야 함
const ShareWidthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: ease-in-out 0.1s;
  }
`;
interface ICheckboxProps {
  key: string;
  isChecked: boolean;
  index: number;
  boardIndex: number;
}
function Checkbox({ isChecked, index, boardIndex }: ICheckboxProps) {
  const [isClicked, setIsClicked] = useState(isChecked);

  function CheckBox_Onclick() {
    setIsClicked(!isClicked);
  }

  return (
    <ShareWidthDiv onClick={CheckBox_Onclick}>
      {isClicked ? (
        <FontAwesomeIcon icon={faSquareCheck} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSquare} size="lg" />
      )}
    </ShareWidthDiv>
  );
}

export default Checkbox;
