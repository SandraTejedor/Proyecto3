import axios from "axios";

export default class ResultServices {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:5000/api/results",
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  //   signup = (username, password) =>
  //     this._service.post("/signup", { username, password });
  //   login = (username, password) =>
  //     this._service.post("/login", { username, password });
  //   logout = () => this._service.post("/logout");
  //   loggedin = () => this._service.get("/loggedin");
  primitiva = () => this._service.get("/primitiva");
  euromillon = () => this._service.get("/euromillon");
  gordo = () => this._service.get("/gordo");
  bonoloto = () => this._service.get("/bonoloto");
  quiniela = () => this._service.get("/quiniela");
  quinigol = () => this._service.get("/quinigol");
  lototurf = () => this._service.get("/lototurf");
  quintuple = () => this._service.get("/quintuple");
  sabado = () => this._service.get("/sabado");
  jueves = () => this._service.get("/jueves");
}
