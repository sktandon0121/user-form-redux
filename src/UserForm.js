import React, { Component } from "react";
import { setUser } from "./action";
import { connect } from "react-redux";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandle = () => {
    let { name, email } = this.state;
    const { setUser } = this.props;
    if (name.trim() != "" && email.trim() != "") {
      setUser({ name, email });
    }
  };

  render() {
    console.log(this.props);
    let { name, email } = this.state;
    return (
      <div className="user-form">
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.changeHandle}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.changeHandle}
          />
        </div>

        <div>
          <button onClick={this.submitHandle}>Sign In</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: data => dispatch(setUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
