import React from 'react';
import AppService from './AppService'


class StrInput extends React.Component<string, string> {
  constructor(props: string) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = "";
  }


  handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    let input = e.target.value
    this.setState(input)
    AppService.getRvrsStr(input)
    .then(rez => this.setState( rez ))
    
  }

  render() {
    const str = "";
    return (
      <fieldset>
        {/* <input value={str} onChange={this.handleChange} /> */}
        <h1>{str}</h1>
      </fieldset>
    );
  }
}

export default StrInput;