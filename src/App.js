import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from "./containers/Navbar";
import SearchInput from "./containers/SearchBar";
import Footer from "./components/Footer";

const App = props => (
  <MuiThemeProvider>
    <div className="App">
      <div className="App__header">
        <Navbar />
      </div>
      <div className="App__content" />
      <div className="App__footer" />
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = (state, ownProps) => ({ ownProps });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
