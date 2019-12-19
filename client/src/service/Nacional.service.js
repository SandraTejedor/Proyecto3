import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/nacional`,
      withCredentials: true // RUTAS PERSISTENTES
    });
  }

  postNacional = nacional => this._service.post("/new", nacional);
  postNacionalBuy = nacionalBuy => this._service.post("/buy", nacionalBuy);
  nacionalList = nacionalList => this._service.get("/list", nacionalList);
  delete = nacionalList => this._service.get(`/delete/${nacionalList}`);
  nacionalOrder = nacionalOrder => this._service.get("/order", nacionalOrder);
  deleteOrder = deleteOrder => {
    this._service.post(`/create-pdf/${deleteOrder}`);

    return this._service.post(`/deleteOrder/${deleteOrder}`);
  };
  myOrderList = myOrderList => this._service.get("/myorder", myOrderList);
  sold = sold => this._service.get("/sold", sold);
}
