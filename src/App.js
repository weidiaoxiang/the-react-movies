import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from "./containers/Navbar";
import SearchInput from "./containers/SearchBar";
import Footer from "./components/Footer";
import { getGenres } from "./actions/genresActions";

class App extends Component {
  static propTypes = {
    getGenres: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App__header">
            <Navbar />
          </div>
          <div className="App__content main">{this.props.children}</div>
          <div className="App__footer" />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGenres: () => dispatch(getGenres()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
