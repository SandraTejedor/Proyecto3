import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: "http://localhost:5000/api/nacional",
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  //   getAllCoasters = () => this._service.get("/getAllCoasters");
  //   getOneCoaster = id => this._service.get(`/${id}`);
  postNacional = nacional => this._service.post("/new", nacional);
  postNacionalBuy = nacionalBuy => this._service.post("/buy", nacionalBuy);
  nacionalList = nacionalList => this._service.get("/list", nacionalList);
  delete = nacionalList => this._service.get(`/delete/${nacionalList}`);
  
}
