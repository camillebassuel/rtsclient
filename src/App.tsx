import { Console } from 'console';
import React from 'react';
import AppService from './AppService'

interface StateType {
  chaine : string;
  mchaine : string;
}


class StrInput extends React.Component<{}, StateType> {
  constructor(props: any){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { chaine  :"test", mchaine : "tset" }
  }

  
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    let input = e.target.value
    // alert(input)
    // this.setState({chaine: input});
    AppService.getRvrsStr(input)
    .then(rez =>  this.setState({chaine:input , mchaine: rez.toString() }) )

  }

  render() {
    const str = this.state.chaine;
    const mstr = this.state.mchaine;
    return (
      <fieldset>
        <h1>please type some text in the box below</h1>
        <input value={str} onChange={this.handleChange} />
        <p>{mstr}</p>
      </fieldset>
    );
  }
}

export default StrInput;