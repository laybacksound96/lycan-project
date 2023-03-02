import styled from "styled-components";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { isAuthenticated } from "../atoms";

const CLIENT_ID = "1080467945186144308";
const CLIENT_SECRET = "esRaerHnv5hm0Xz_QgE5vU9h8N-tmIVY";
const REDIRECT_URI = "http://localhost:3000/login";

function Home() {
  const [getIsAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticated);

  /*
  useEffect(() => {
    const token = sessionStorage.getItem("access_token");

    if (token) {
      // Check if token is still valid
      axios
        .get("https://discord.com/api/v8/users/@me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          setIsAuthenticated(true);
        })
        .catch(() => {
          sessionStorage.removeItem("access_token");
        });
    }
  }, [setIsAuthenticated]);
*/
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      axios({
        method: "post",
        url: "https://discord.com/api/oauth2/token",
        data: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: "authorization_code",
          code: code,
          redirect_uri: REDIRECT_URI,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          const access_token = response.data.access_token;
          sessionStorage.setItem("access_token", access_token);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleLogin = () => {
    const urlParams = new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: "identify guilds",
    });
    window.location.href = `https://discord.com/api/oauth2/authorize?${urlParams}`;
  };
  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    setIsAuthenticated(false);
  };
  return (
    <Body>
      {getIsAuthenticated ? (
        <button onClick={handleLogout}>aaaaaaaaaaaaa</button>
      ) : (
        <LoginContainer>
          <NameBox>Login page</NameBox>
          <LoginBox onClick={handleLogin}>
            <div>디스코드로 로그인</div>
          </LoginBox>
        </LoginContainer>
      )}
    </Body>
  );
}

export default Home;

const LoginBox = styled.button`
  border: 0;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 80%;
  height: 50px;
  background-color: #5865f2;

  :hover {
    background-color: #4752c4;
    transition: 0.1s ease-in-out;
  }
  div {
    color: white;
    font-size: 15px;
    font-weight: 600;
  }
`;
const NameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 20%;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  background-color: #b3b3b3;
  border-radius: 15px;
`;
const Body = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
