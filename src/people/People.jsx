import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";

class People extends Component {
  static propTypes = {
    people: PropTypes.array
  };

  renderList() {
    let { people, filterQuery } = this.props;

    if (filterQuery.length > 0) {
      people = _.filter(people, function(item) {
        return item.name.toUpperCase().includes(filterQuery.toUpperCase());
      });
    }

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

const mapStateToProps = state => ({
  people: state.people.people,
  filterQuery: state.people.filterQuery
});

export default connect(mapStateToProps)(People);
