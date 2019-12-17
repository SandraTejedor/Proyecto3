import axios from "axios";

export default class JuegosServices {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.dev.REACT_APP_URL}/juegos`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  bonoloto = bonoloto => this._service.post("/bonoloto", bonoloto);
  getbonoloto = bonoloto => this._service.get("/bonoloto", bonoloto);
  getbonolotoSold = bonolotoSold =>
    this._service.get("/bonolotoSold", bonolotoSold);
  deleteBonoOrder = deleteBonoOrder =>
    this._service.get(`/deleteBonoOrder/${deleteBonoOrder}`);
  myOrderListBono = myOrderListBono =>
    this._service.get("/myorderBono", myOrderListBono);
  primitiva = primitiva => this._service.post("/primitiva", primitiva);
  getprimitiva = primitiva => this._service.get("/primitiva", primitiva);
  getprimitivaSold = primitivaSold =>
    this._service.get("/primitivaSold", primitivaSold);
  deletePrimiOrder = deletePrimiOrder =>
    this._service.get(`/deletePrimiOrder/${deletePrimiOrder}`);
  myOrderListPrimi = myOrderListPrimi =>
    this._service.get("/myOrderListPrimi", myOrderListPrimi);
  gordo = gordo => this._service.post("/gordo", gordo);
  getgordo = gordo => this._service.get("/gordo", gordo);
  getgordoSold = gordoSold => this._service.get("/gordoSold", gordoSold);
  deleteGordoOrder = deleteGordoOrder =>
    this._service.get(`/deleteGordoOrder/${deleteGordoOrder}`);
  myOrderListGordo = myOrderListGordo =>
    this._service.get("/myOrderListGordo", myOrderListGordo);
  euromillon = euromillon => this._service.post("/euromillon", euromillon);
  geteuromillon = euromillon => this._service.get("/euromillon", euromillon);
  geteuromillonSold = euromillonSold =>
    this._service.get("/euromillonSold", euromillonSold);
  deleteEuroOrder = deleteEuroOrder =>
    this._service.get(`/deleteEuroOrder/${deleteEuroOrder}`);
  myOrderListEuro = myOrderListEuro =>
    this._service.get("/myOrderListEuro", myOrderListEuro);
}
