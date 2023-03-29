import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { CharacterState } from "../../../atoms";
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
  const setChars = useSetRecoilState(CharacterState);
  function CheckBox_Onclick() {
    setIsClicked(!isClicked);
    setChars((prev) => {
      const prevCopy = [...prev];
      const charactorCopy = { ...prevCopy[boardIndex] };
      const checkCopy = [...charactorCopy.Check];
      console.log(checkCopy);
      return prev;
    });
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
