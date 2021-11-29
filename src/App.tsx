import { Console } from 'console';
import React from 'react';
import AppService from './AppService'

interface StateType {
  chaine : string;
}


class StrInput extends React.Component<{}, StateType> {
  constructor(props: any){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { chaine  :"ttest"}
  }

  
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    let input = e.target.value
    // alert(input)
    // this.setState({chaine: input});
    AppService.getRvrsStr(input)
    .then(rez =>  this.setState({chaine: rez}) )

  }

  render() {
    const str = this.state.chaine;
    return (
      <fieldset>
        <input value={str} onChange={this.handleChange} />
        <h1>{str}</h1>
      </fieldset>
    );
  }
}

export default StrInput;