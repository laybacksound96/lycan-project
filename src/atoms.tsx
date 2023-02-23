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
    { name: "a", check: ["a", "b", "c"] },
    { name: "b", check: ["a", "b", "c", "d"] },
    { name: "c", check: ["a", "b"] },
  ],
});

export const RowState = atom({
  key: "RowState",
  default: ["A", "B", "C"],
});
