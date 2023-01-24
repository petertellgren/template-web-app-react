import { useContext } from "react";
import useApi from "../../api/hooks/UseApi";
import { TokenRequestRequest } from "../../api/service/requests/TokenRequestRequest";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  const { state, dispatch } = useContext(AuthContext);
  const api = useApi();

  async function login(data: TokenRequestRequest) {
    await api.requestToken(data);
    dispatch({
      type: "auth/login",
    });
  }

  async function logout() {
    await api.logout();
    dispatch({
      type: "auth/logout",
    });
  }

  return {
    ...state,
    login,
    logout,
  };
}

export default useAuth;
