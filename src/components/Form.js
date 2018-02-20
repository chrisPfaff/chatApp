import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import io from "socket.io-client";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: '',
      messages: []
    };
  }

  componentDidMount() {
    this.socket = io('http://localhost:8081');
    console.log('mounted');
  }

  render() {
    return (
      <div>
        <div className="chatBody">
          {this.state.messages.map(text => {
            return (
              <div>{message.username}: {message.message}</div>
            )
          })}
        </div>
          <form className="FormBox">
            <label>
              Name:
              <input className="nameBox" type="text" name="Name" />
            </label>
            <label>
              Text:
              <input className="textBox" type="text" name="Message" />
            </label>
            <FlatButton
              type="submit"
              label="login"
              className="button-submit"
              secondary={true}
            />
          </form>
      </div>
    );
  }
}

export default Form;
