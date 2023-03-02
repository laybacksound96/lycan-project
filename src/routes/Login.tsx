import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isAuthenticated } from "../atoms";

function Login() {
  const history = useHistory();
  const setIsAuthenticated = useSetRecoilState(isAuthenticated);
  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    setIsAuthenticated(false);
    history.push("/");
  };
  const clickMe = () => {};
  return (
    <div>
      <button onClick={handleLogout}>aaaaaaaaaaaaa</button>
      <button onClick={clickMe}>bbbbbbbbbbbbb</button>
    </div>
  );
}
export default Login;
