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
import MyOrderList from "./components/auth/myOrders"
import Sold from "./components/vendor/sold";


import JuegosOrder from "./components/vendor/juegosOrders";

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
              this.state.loggedInUser ? (
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
            path="/loteriaNacional/jueves"
            render={match => <Jueves setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/loteriaNacional/sabado"
            render={match => <Sabado setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/loteriaNacional/navidad"
            render={match => <Navidad setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/loteriaNacional/elniño"
            render={match => <ElNiño setUser={this.setTheUser} {...match} />}
          />

          <Route
            path="/juegos/bonoLoto"
            render={match => <BonoLoto setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/juegos/primitiva"
            render={match => <Primitiva setUser={this.setTheUser} {...match} />}
          />
          <Route
            path="/juegos/euromillon"
            render={match => (
              <Euromillon setUser={this.setTheUser} {...match} />
            )}
          />
          <Route
            path="/juegos/elGordo"
            render={match => <ElGordo setUser={this.setTheUser} {...match} />}
          />

          <Route
            path="/nacional/new"
            render={match =>
              this.state.loggedInUser.perfil === "vendedor" ? (
                <Nacional setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/nacional/buy"
            render={match =>
              this.state.loggedInUser ? (
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
              (this.state.loggedInUser && this.state.loggedInUser.perfil === "vendedor") ? (
                <NacionalList setUser={this.setTheUser} {...match} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/nacional/order"
            render={match =>
              this.state.loggedInUser.perfil === "vendedor" ? (
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
              this.state.loggedInUser ? (
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
              this.state.loggedInUser.perfil === "vendedor" ? (
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
            render={match => (
              <JuegosOrder
                setUser={this.setTheUser}
                {...match}
                loggedInUser={this.state.loggedInUser}
              />
            )}
          />
          
        </Switch>
      </>
    );
  }
}

export default App;
