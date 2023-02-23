import { atom } from "recoil";

/*
interface ICharacterInfo {
  ["ServerName"]: string;
  ["CharacterName"]: string;
  ["CharacterLevel"]: number;
  ["CharacterClassName"]: string;
  ["ItemAvgLevel"]: string;
  ["ItemMaxLevel"]: string;
}

interface ICharacterToDo {
  name: string;
  toDo: Todo;
}
interface Todo {
  guildRaid: boolean;
  valtan: boolean;
  vykas: boolean;
  abrel: boolean;
  saton: boolean;
  akkan: boolean;
}

*/

export const CharacterState = atom({
  key: "CharacterInfo",
  default: [
    {
      CharacterName: "a",
      check: [
        { checkName: "A", isChecked: true },
        { checkName: "B", isChecked: false },
        { checkName: "C", isChecked: false },
        { checkName: "D", isChecked: false },
        { checkName: "E", isChecked: false },
      ],
    },
  ],
});

export const RowState = atom({
  key: "RowState",
  default: ["발탄", "비아", "쿠크", "아브렐", "일리"],
});
