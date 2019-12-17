import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Service from "./service/Auth.service";

/* CUSTOM UI COMPONENTS */
import Navbar from "./components/ui/Navbar";

/* CUSTOM PAGE COMPONENTS */
import Index from "./components/pages/Index";
import Profile from "./components/pages/Profile";

/* CUSTOM AUTH COMPONENTS */
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

/* CUSTOM RESULTS COMPONENTS */
import Results from "./components/results/results";

/* CUSTOM CONTACT COMPONENTS */
import Contact from "./components/contact/contact";

/* CUSTOM LOTERIA NACIONAL COMPONENTS */
import ElNiño from "./components/LoteriaNacional/ElNiño";
import Jueves from "./components/LoteriaNacional/Jueves";
import Navidad from "./components/LoteriaNacional/Navidad";
import Sabado from "./components/LoteriaNacional/Sabado";

/* CUSTOM JUEGOS COMPONENTS */
import BonoLoto from "./components/Juegos/BonoLoto";
import ElGordo from "./components/Juegos/ElGordo";
import Euromillon from "./components/Juegos/Euromillon";
import Primitiva from "./components/Juegos/Primitiva";

import Nacional from "./components/vendor/addLotery";
import NacionalBuy from "./components/LoteriaNacional/buyLottery";
import NacionalList from "./components/LoteriaNacional/list";
import OrderList from "./components/vendor/orders";
import MyOrderList from "./components/auth/myOrders";
import Sold from "./components/vendor/sold";

import JuegosOrder from "./components/vendor/juegosOrders";
import JuegosSold from "./components/vendor/juegosSold";

import MyJuegosOrder from "./components/auth/myOrdersJuegos";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: null };
    this._service = new Service();
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user });
    console.log(
      "El método 'setTheUser' de App.js se ha invocado, pasando al estado 'loggedInUser:",
      this.state.loggedInUser
    );
  };

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this._service
        .loggedin()
        .then(theLoggedInUserFromTheServer =>
          this.setState({ loggedInUser: theLoggedInUserFromTheServer.data })
        )
        .catch(err => {
          this.setState({ loggedInUser: false });
          console.log({ err });
        });
    }
  };

  render() {
    this.fetchUser();

    return (
      <>
        <Navbar
          loggedInUser={this.state.loggedInUser}
          setUser={this.setTheUser}
        />

        <Switch>
          <Route exact path="/" component={Index} />

          <Route
            path="/signup"
            render={match => <Signup setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/login"
            render={match => <Login setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/profile"
            render={() =>
              this.state.loggedInUser == null ? (
                <Redirect to="/profile" />
              ) : this.state.loggedInUser ? (
                <Profile loggedInUser={this.state.loggedInUser} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/results"
            render={match => <Results setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/contact"
            render={match => <Contact setUser={this.setTheUser} {...match} />}
          />

          <Route
            path="/juegos/bonoLoto"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/juegos/bonoloto" />
              ) : this.state.loggedInUser ? (
                <BonoLoto setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/juegos/primitiva"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/juegos/primitiva" />
              ) : this.state.loggedInUser ? (
                <Primitiva setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/juegos/euromillon"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/juegos/euromillon" />
              ) : this.state.loggedInUser ? (
                <Euromillon setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/juegos/elGordo"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/juegos/gordo" />
              ) : this.state.loggedInUser ? (
                <ElGordo setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />

          <Route
            path="/nacional/new"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/nacional/new" />
              ) : this.state.loggedInUser.perfil === "vendedor" ? (
                <Nacional setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/nacional/buy"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/nacional/buy" />
              ) : this.state.loggedInUser ? (
                <NacionalBuy
                  setUser={this.setTheUser}
                  {...match}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/nacional/list"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/nacional/list" />
              ) : this.state.loggedInUser.perfil === "vendedor" ? (
                <NacionalList setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/nacional/order"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/nacional/order" />
              ) : this.state.loggedInUser.perfil === "vendedor" ? (
                <OrderList
                  setUser={this.setTheUser}
                  {...match}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/nacional/myorder"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/nacional/myorder" />
              ) : this.state.loggedInUser ? (
                <MyOrderList
                  setUser={this.setTheUser}
                  {...match}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/nacional/sold"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/nacional/sold" />
              ) : this.state.loggedInUser.perfil === "vendedor" ? (
                <Sold
                  setUser={this.setTheUser}
                  {...match}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/juegos/order"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/juegos/order" />
              ) : this.state.loggedInUser.perfil === "vendedor" ? (
                <JuegosOrder
                  setUser={this.setTheUser}
                  {...match}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/juegos/myorder"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/juegos/myorder" />
              ) : this.state.loggedInUser ? (
                <MyJuegosOrder
                  setUser={this.setTheUser}
                  {...match}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/juegos/sold"
            render={match =>
              this.state.loggedInUser == null ? (
                <Redirect to="/juegos/sold" />
              ) : this.state.loggedInUser.perfil === "vendedor" ? (
                <JuegosSold
                  setUser={this.setTheUser}
                  {...match}
                  loggedInUser={this.state.loggedInUser}
                />
              ) : (
                    <Redirect to="/" />
                  )
            }
          />
        </Switch>
      </>
    );
  }
}

export default App;
