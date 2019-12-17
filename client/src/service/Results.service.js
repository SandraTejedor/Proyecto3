import axios from "axios";

export default class ResultServices {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/results`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

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
