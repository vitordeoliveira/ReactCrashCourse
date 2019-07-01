import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    score: 1,
    score2: 2
  };

  onChange = e => this.setState({ score: this.state.score + 1 });
  onChange2 = e => this.setState({ score2: this.state.score2 + 1 });
  render() {
    return (
      <form action="" style={{ display: "flex" }}>
        <h1>Player 1 score={this.state.score}</h1>
        <h1>Player 2 score={this.state.score2}</h1>

        <input
          type="button"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
          onClick={this.onChange}
        />

        <input
          type="button"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
          onClick={this.onChange2}
        />
      </form>
    );
  }
}

export default AddTodo;
