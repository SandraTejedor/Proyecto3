import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/auth`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  signup = (username, password, email, perfil) =>
    this._service.post("/signup", { username, password, email, perfil });
  login = (username, password) =>
    this._service.post("/login", { username, password });
  logout = () => this._service.post("/logout");
  loggedin = () => {
    console.log("------", `${process.env.REACT_APP_URL}/auth`, "----");
    return this._service.get("/loggedin");
  };
}
