import React from 'react';
// import Music from './Music'
import AudioPlayer from 'react-modular-audio-player';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fileURL: [''],
    };
}
  Uploadfile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json()
      .then((body) => {
        this.setState({ 
          fileURL: [...this.state.fileURL] `http://localhost:8000/${body.file}`
        });
      });
    }); 
  }

  render() {
    console.log(playList)
    const playList = this.state.fileURL.map((data ,i)=>{
      return (
      <AudioPlayer 
      key = {i} 
      audioFiles = {data.src}  
      />)
     })
     console.log(playList);
    return (
      <div>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <button onClick = {this.Uploadfile}>Upload</button>
        </div>
        <div>
       {playList}
      </div>
      </div>
    );
  }
}

export default Upload;
