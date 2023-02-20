export function fetchCharInfo(name: string) {
  return fetch(
    `https://developer-lostark.game.onstove.com/characters/${name}/siblings`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        accept: "application/json",
        authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMTkwMDUifQ.Ra3MGPEnAqhAfT2F5bAJUIXGVmx8IIAw3Gn1dlWLgl7Kv0vkf6EODgl4e8q0URjzICDBKC2jpK8ccY3P8IVh8CJFxYZV4AyhIMZmFwe-7VNHlVo33g4ZOkUhGXuNoGgUhrgL2pyJARB2QY6p40dPImJq45VnVruaApkYaPANxQUv0mKR6o_uu1MNOEj660Iz_1oJqpI_Xu0Kk-LBm4pHFgnJ7jWgeKJ4jmnIBvs8NSJTKLt-_HVPOWZ_e5vAUc0KiJA6de6YQ3OCUHpSc0Q4dpw5TJzVp3dWMDFewq-sb3xcdn0jR9Bq-9YwVzIzlbwFMEZaL55O0E2CVjqwhhPx7A",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  ).then((response) => response.json());
}
