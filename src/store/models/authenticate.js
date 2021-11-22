import axios from "axios";
import { push } from 'connected-react-router';

const isAuthenticated = localStorage.getItem('jwt') ? true : false;

const authentication = {
  state: {
    isAuthenticated,
  },
  reducers: {
    setAuthentication(state, payload) {
      return {
        ...state,
        isAuthenticated: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      const account = {
        username: payload.username,
        password: payload.password,
      };
      try {
        const response = await axios.post("http://localhost:8080/login", account);
        if (response.data) {
          console.log(response.data);
          try {
            localStorage.setItem('token', JSON.stringify(response.data.token));
          } catch (error) {
            console.log(error)
          }
          dispatch.authentication.setAuthentication(true);
          try {
            dispatch(push('/abc'));
          }
          catch (error) { console.log(error); }
          console.log("Thanh cong!");
        } else {
          dispatch.authentication.setAuthentication(false);
          console.log("That bai!");
        };
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      this.setAuthentication(false);
      localStorage.removeItem('token');
      dispatch(push("/"));
    }
  })
}

export default authentication;