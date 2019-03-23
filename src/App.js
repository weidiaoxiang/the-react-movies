import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./containers/Navbar";
import SearchInput from "./containers/SearchBar";
import Footer from "./components/Footer";
import { getGenres } from "./actions/genresActions";

const styles = theme => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing.unit,
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 10,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing.unit * 20,
      paddingRight: theme.spacing.unit * 20,
    },
  },
});

class App extends Component {
  static propTypes = {
    getGenres: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App__header">
            <Navbar />
          </div>
          <div className={classes.main}>{this.props.children}</div>
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
)(withStyles(styles)(App));
