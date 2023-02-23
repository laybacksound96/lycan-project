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
      name: "a",
      check: [
        { checkName: "A", isChecked: false },
        { checkName: "B", isChecked: false },
        { checkName: "C", isChecked: false },
      ],
    },
    {
      name: "b",
      check: [
        { checkName: "A", isChecked: false },
        { checkName: "B", isChecked: true },
        { checkName: "C", isChecked: true },
      ],
    },
    {
      name: "c",
      check: [
        { checkName: "A", isChecked: false },
        { checkName: "B", isChecked: true },
        { checkName: "C", isChecked: false },
      ],
    },
  ],
});

export const RowState = atom({
  key: "RowState",
  default: ["A", "B", "C"],
});
