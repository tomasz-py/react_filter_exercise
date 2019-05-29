import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFilterQuery } from "../actions/people";

class Filter extends Component {
  static propTypes = {
    filterQuery: PropTypes.string
  };

  onInputChange = event => {
    this.props.setFilterQuery(event.target.value);
  };

  render() {
    return (
      <div className="App-box">
        <input type="text" placeholder="Filter" onChange={this.onInputChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { filterQuery: state.people.filterQuery };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFilterQuery
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
