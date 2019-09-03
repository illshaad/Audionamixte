import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import UploadBacking from './UploadBacking';


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fileURL: '',
        music : [],
        backing: false
    };
}
  Uploadfile = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    

    fetch('http://localhost:8000/upload/voice', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json()
      .then((body) => {
        this.setState({ 
          fileURL:  `http://localhost:8000/${body.file}` ,
          
        });
      });
    }); 
  }

  render() {
        let playList =[
        {
          src : this.state.fileURL ,
          title : 'Song',
          artist : 'Singer'
        },
      ]
    
    return (
      <div>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <button onClick = {this.Uploadfile}>Upload</button>
        </div>
        <div>
          <AudioPlayer 
              audioFiles={playList}
          />
        {this.state.backing && <UploadBacking />}
        </div>
        {!this.state.backing && <button onClick={() => this.setState({backing: !this.state.backing})}>+</button>}
      </div>
    );
  }
}

export default Upload;
