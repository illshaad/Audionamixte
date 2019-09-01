import React from 'react';
import Music from './Music'

class Ajouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const dataList = this.state.data.map((data,i)=>{
        return (<Music key={i} 
        />)
       })
    return (
      <div>
        <button onClick={this.dataList}>+</button>
      </div>
    );
  }
}

export default Ajouts;
