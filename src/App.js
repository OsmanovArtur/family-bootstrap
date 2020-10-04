import React, { Component } from "react";
import classes from "./App.module.css";
import FamillyCards from "./Container/FamillyCards/FamillyCards";
import { Route } from "react-browser-router";
import PersonPage from "./Container/PersonPage/PersonPage";
import InputForm from "./Container/InputForm/InputForm";

class App extends Component {
  state = {
    name: "",
    sername: "",
    deskription: "",
    img: "",
    socialNetworks: "",
    newProfile: [],
    id: "",
    valid: true,
  };

  onChangeName = ({ target }) => {
    const name = target.value;

    this.setState({
      name,
    });
    name.trim() &&
    this.state.socialNetworks.trim() &&
    this.state.deskription.trim() &&
    this.state.sername.trim() &&
    this.state.img.trim() !== " "
      ? this.setState({ valid: false })
      : this.setState({ valid: true });
  };

  onChangeSername = ({ target }) => {
    const sername = target.value;
    this.setState({ sername });
    this.state.name.trim() &&
    this.state.socialNetworks.trim() &&
    this.state.deskription.trim() &&
    sername.trim() &&
    this.state.img.trim() !== " "
      ? this.setState({ valid: false })
      : this.setState({ valid: true });
  };
  onChangeImg = ({ target }) => {
    const img = target.value;
    this.setState({ img });
    this.state.name.trim() &&
    this.state.socialNetworks.trim() &&
    this.state.deskription.trim() &&
    this.state.sername.trim() &&
    img.trim() !== " "
      ? this.setState({ valid: false })
      : this.setState({ valid: true });
  };

  onChangeSocialNetworks = ({ target }) => {
    const socialNetworks = target.value;
    this.setState({ socialNetworks });
    this.state.name.trim() &&
    socialNetworks.trim() &&
    this.state.deskription.trim() &&
    this.state.sername.trim() &&
    this.state.img.trim() !== " "
      ? this.setState({ valid: false })
      : this.setState({ valid: true });
  };
  onChangeDeskription = ({ target }) => {
    const deskription = target.value;
    this.setState({
      deskription,
    });
    this.state.name.trim() &&
    this.state.socialNetworks.trim() &&
    deskription.trim() &&
    this.state.sername.trim() &&
    this.state.img.trim() !== " "
      ? this.setState({ valid: false })
      : this.setState({ valid: true });
  };

  pushNewProfile = () => {
    if (
      this.state.name.trim() &&
      this.state.socialNetworks.trim() &&
      this.state.deskription.trim() &&
      this.state.sername.trim() &&
      this.state.img.trim() !== " "
    ) {
      const newArr = [
        {
          name: this.state.name,
          sername: this.state.sername,
          deskription: this.state.deskription,
          img: this.state.img,
          socialNetworks: this.state.socialNetworks,
          id: Math.random() + "",
        },
      ];
      const newProfile = [...this.state.newProfile, ...newArr];

      this.setState({
        newProfile,
        valid: true,
      });
    } else {
      this.setState({ valid: true });
    }
    this.setState({
      name: "",
      sername: "",
      deskription: "",
      img: "",
      socialNetworks: "",
    });
  };

  render() {
    return (
      <div className={classes.Container}>
        <Route
          path="/"
          exact
          render={() => <FamillyCards newProfile={this.state.newProfile} />}
        />
        <Route
          path="/PersonPage/:id"
          exact
          render={() => <PersonPage newProfile={this.state.newProfile} />}
        />
        <Route
          path="/InputForm"
          exact
          render={() => (
            <InputForm
              onChangeName={this.onChangeName}
              onChangeSername={this.onChangeSername}
              onChangeImg={this.onChangeImg}
              onChangeSocialNetworks={this.onChangeSocialNetworks}
              onChangeDeskription={this.onChangeDeskription}
              pushNewProfile={this.pushNewProfile}
              valid={this.state.valid}
            />
          )}
        >
          {" "}
        </Route>
      </div>
    );
  }
}

export default App;
