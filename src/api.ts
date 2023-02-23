export function fetchCharInfo(name: string) {
  const KEY = process.env.REACT_APP_LOSTARK_API_KEY;
  return fetch(
    `https://developer-lostark.game.onstove.com/characters/${name}/siblings`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        accept: "application/json",
        authorization: `bearer ${KEY}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  ).then((response) => response.json());
}
