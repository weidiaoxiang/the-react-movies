import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";
import { compose } from "ramda";

const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto",
    },
  },
  searchButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    color: "white",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class SearchAppBar extends React.Component {
  state = {
    tabValue: "/popular",
    searchKeyword: "",
  };

  handleTabClick = (event, value) => {
    this.setState({ tabValue: value });
    this.props.history.push(value);
  };

  handleSearch = event => {
    event.preventDefault();
    const { searchKeyword } = this.state;
    const { history } = this.props;

    if (!!searchKeyword && searchKeyword.length > 0) {
      history.push(`/search/${searchKeyword}`);
    }
  };

  handleSearchType = event => {
    const { value } = event.target;
    this.setState({ searchKeyword: value });
  };

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              The React Movies
            </Typography>
            <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={this.handleSearchType}
              />
              <IconButton
                className={classes.searchButton}
                aria-label="Search"
                onClick={this.handleSearch}
              >
                <SearchIcon className={classes.searchIcon} />
              </IconButton>
            </div>
            <div className={classes.grow}>
              <Tabs value={tabValue} onChange={this.handleTabClick}>
                <Tab label="Popular" value="/popular" />
                <Tab label="Top Rated" value="/top" />
              </Tabs>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default compose(
  withRouter,
  withStyles(styles)
)(SearchAppBar);
