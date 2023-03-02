import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isAuthenticated } from "../atoms";

function Login() {
  const LYCAN_ID = "565492584257028097";
  const [isLycanGuildMemeber, setIsLycan] = useState<boolean>(false);
  const [LycanInfoObject, setLycanObject] = useState();
  const history = useHistory();
  const setIsAuthenticated = useSetRecoilState(isAuthenticated);
  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    setIsAuthenticated(false);
    history.push("/");
  };
  const clickMe = () => {
    const token = sessionStorage.getItem("access_token");
    axios
      .get("https://discord.com/api/v10/users/@me/guilds", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const LycanInfoObject = res.data.filter(
          (guilds: { id: string | string[] }) => guilds.id.includes(LYCAN_ID)
        );
        if (LycanInfoObject.length === 0) {
          setIsLycan(false);
        } else {
          setIsLycan(true);
        }
        setLycanObject((prev) => {
          return LycanInfoObject;
        });
        console.log(isLycanGuildMemeber);
      });
  };
  return (
    <div>
      <button onClick={handleLogout}>aaaaaaaaaaaaa</button>
      <button onClick={clickMe}>bbbbbbbbbbbbb</button>
      {isLycanGuildMemeber ? <div>반가워요!</div> : <div>아쉬워요</div>}
    </div>
  );
}
export default Login;
