import React from "react";
import { PROVIDERS } from "../constants";
import { map } from "../helpers";

export class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      providers: this.loadProviders()
    };
  }

  loadProviders() {
    let providers = [];
    map((option, idx) => {
      providers.push(
        <option key={`provider-option-${idx}`} value={option.value}>
          {option.key}
        </option>
      );
    }, PROVIDERS);
    return providers;
  }

  render() {
    return (
      <div className="landing-page">
        <select>{this.state.providers}</select>
        <p>small wang</p>
      </div>
    );
  }
}
