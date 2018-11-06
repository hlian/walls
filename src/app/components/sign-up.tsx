import * as React from "react";
import * as ReactDOM from "react-dom";

class SignUp extends React.Component<{}> {
  username: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.username = React.createRef();
  }

  render() {
    return (
      <div>
        <header>SIGN UP</header>
        <form id="sign-up" onSubmit={this.onSubmit}>
          <p>
            <input
              name="username"
              ref={this.username}
              required
              pattern="[a-z]+"
            />{" "}
            Username (only lowercase letters from a to z)
          </p>
          <p>
            <input type="submit" value="W A L L" />
          </p>
        </form>
      </div>
    );
  }

  private onSubmit(e: React.FormEvent<{}>) {
    e.preventDefault();
    window.fetch("/api/sign-up", {
      method: "POST",
      mode: "same-origin",
      body: JSON.stringify({
        username: this.username.current ? this.username.current.value : ""
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  }
}

export default SignUp;
