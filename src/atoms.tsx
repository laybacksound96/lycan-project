import { atom } from "recoil";

export interface ICheck {
  checkName: string;
  isChecked: boolean;
}
export interface ICharacter {
  CharacterName: string;
  Check: ICheck[];
  ServerName?: string;
  CharacterLevel?: number;
  CharacterClassName?: string;
  ItemAvgLevel?: string;
  ItemMaxLevel?: string;
}

export const CharacterState = atom<ICharacter[]>({
  key: "CharacterInfo",
  default: [
    {
      CharacterName: "a",
      Check: [
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
  default: ["A", "B", "C", "D", "E"],
});
