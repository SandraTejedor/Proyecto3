import axios from "axios";

export default class JuegosServices {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:5000/api/juegos",
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  bonoloto = bonoloto => this._service.post("/bonoloto", bonoloto);
  getbonoloto = bonoloto => this._service.get("/bonoloto", bonoloto);
  deleteBonoOrder = deleteBonoOrder =>
    this._service.get(`/deleteBonoOrder/${deleteBonoOrder}`);
  primitiva = primitiva => this._service.post("/primitiva", primitiva);
  getprimitiva = primitiva => this._service.get("/primitiva", primitiva);
  deletePrimiOrder = deletePrimiOrder =>
    this._service.get(`/deletePrimiOrder/${deletePrimiOrder}`);
  gordo = gordo => this._service.post("/gordo", gordo);
  getgordo = gordo => this._service.get("/gordo", gordo);
  deleteGordoOrder = deleteGordoOrder =>
    this._service.get(`/deleteGordoOrder/${deleteGordoOrder}`);
  euromillon = euromillon => this._service.post("/euromillon", euromillon);
  geteuromillon = euromillon => this._service.get("/euromillon", euromillon);
  deleteEuroOrder = deleteEuroOrder =>
    this._service.get(`/deleteEuroOrder/${deleteEuroOrder}`);
}
