import { useState, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const UserList = styled.ul``;
const User = styled.li`
  background-color: #6a6a6a;
  color: #ffffff;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 10px;
`;
const Checkbox = styled.input.attrs({ type: "checkbox" })``;
interface charInfo__interface {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}

function Home() {
  const [charInfo, setCharinfo] = useState<charInfo__interface[]>([]);
  useEffect(() => {
    (async () => {
      const url =
        "https://developer-lostark.game.onstove.com/characters/" +
        "제로짠" +
        "/siblings";
      const infoData = await (
        await fetch(url, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            accept: "application/json",
            authorization: `bearer ${process.env.REACT_APP_LOSTARK_API_KEY}`,
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        })
      ).json();
      setCharinfo(infoData);
    })();
  }, []);

  return (
    <Container>
      <UserList>
        {charInfo.map((user) => (
          <User key={user.CharacterName}>
            {user.CharacterName}
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </User>
        ))}
      </UserList>
    </Container>
  );
}

export default Home;
