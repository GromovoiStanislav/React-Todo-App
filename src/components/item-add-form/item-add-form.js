import React, { Component } from "react";
import "./item-add-form.css";

export class ItemAddForm extends Component {
  state = { label: "" };
  onlabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    return (
      <form className="mt-3 d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control mr-1"
          onChange={this.onlabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
