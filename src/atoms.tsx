import { atom } from "recoil";

interface ICharacterInfo {
  ["ServerName"]: string;
  ["CharacterName"]: string;
  ["CharacterLevel"]: number;
  ["CharacterClassName"]: string;
  ["ItemAvgLevel"]: string;
  ["ItemMaxLevel"]: string;
}

const CharacterInfo: ICharacterInfo[] = [
  {
    ServerName: "아만",
    CharacterName: "멜로우에스프레소",
    CharacterLevel: 50,
    CharacterClassName: "기상술사",
    ItemAvgLevel: "302.00",
    ItemMaxLevel: "302.00",
  },
  {
    ServerName: "아만",
    CharacterName: "멜로우아트",
    CharacterLevel: 50,
    CharacterClassName: "도화가",
    ItemAvgLevel: "1,340.00",
    ItemMaxLevel: "1,340.00",
  },
  {
    ServerName: "아만",
    CharacterName: "손톱물어뜯는습관",
    CharacterLevel: 55,
    CharacterClassName: "바드",
    ItemAvgLevel: "1,540.00",
    ItemMaxLevel: "1,540.00",
  },
  {
    ServerName: "아만",
    CharacterName: "아드로핀오버도즈",
    CharacterLevel: 59,
    CharacterClassName: "서머너",
    ItemAvgLevel: "1,493.33",
    ItemMaxLevel: "1,493.33",
  },
  {
    ServerName: "아만",
    CharacterName: "유일한구원쌀먹의안락사",
    CharacterLevel: 52,
    CharacterClassName: "홀리나이트",
    ItemAvgLevel: "1,340.00",
    ItemMaxLevel: "1,340.00",
  },
  {
    ServerName: "아만",
    CharacterName: "쁘다람",
    CharacterLevel: 60,
    CharacterClassName: "도화가",
    ItemAvgLevel: "1,520.83",
    ItemMaxLevel: "1,520.83",
  },
  {
    ServerName: "아만",
    CharacterName: "MVP가누군지궁금하죠",
    CharacterLevel: 60,
    CharacterClassName: "바드",
    ItemAvgLevel: "1,475.00",
    ItemMaxLevel: "1,475.00",
  },
  {
    ServerName: "아만",
    CharacterName: "Gidget",
    CharacterLevel: 60,
    CharacterClassName: "소서리스",
    ItemAvgLevel: "1,445.00",
    ItemMaxLevel: "1,445.00",
  },
  {
    ServerName: "아만",
    CharacterName: "오늘우리마을에유명한사제",
    CharacterLevel: 60,
    CharacterClassName: "바드",
    ItemAvgLevel: "1,531.67",
    ItemMaxLevel: "1,531.67",
  },
  {
    ServerName: "아만",
    CharacterName: "모카모카김모카",
    CharacterLevel: 60,
    CharacterClassName: "바드",
    ItemAvgLevel: "1,560.00",
    ItemMaxLevel: "1,560.00",
  },
  {
    ServerName: "아만",
    CharacterName: "포션오버도즈",
    CharacterLevel: 60,
    CharacterClassName: "바드",
    ItemAvgLevel: "1,600.00",
    ItemMaxLevel: "1,600.00",
  },
];

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
export const CharacterState = atom({
  key: "CharacterInfo",
  default: ["a"],
});

export const RowState = atom({
  key: "RowState",
  default: ["A", "B", "C"],
});
