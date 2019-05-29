import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ...

class People extends Component {
  static propTypes = {
    people: PropTypes.array
  };

  // ...

  renderList() {
    let { people } = this.props;

    return people.map(person => {
      return (
        <div className="App-box" key={person.id}>
          {person.name}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { people: state.people.people };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // ...
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);
