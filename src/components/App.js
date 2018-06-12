import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTitle } from "../actions/title";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.renderNewTitle = this.renderNewTitle.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  renderNewTitle() {
    this.props.changeTitle(this.state.text);
    this.setState({ text: "" });
  }

  onInputChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    let input;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          onChange={this.onInputChange}
          type="text"
          value={this.state.text}
        />
        <div onClick={this.renderNewTitle} className="btn btn-primary">
          Add a new title
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title.title,
});

const mapDispatchToProps = dispatch => ({
  changeTitle: title => dispatch(changeTitle(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
