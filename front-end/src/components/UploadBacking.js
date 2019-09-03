import React from 'react';
import AudioPlayer from 'react-modular-audio-player';

class UploadBacking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fileURL: '',
        music : [],
        instru: false
    };
}
  Uploadfile = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    

    fetch('http://localhost:8000/upload/backing', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json()
      .then((body) => {
        this.setState({ 
          fileURL:`http://localhost:8000/${body.file}` ,
          
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
          <div>
            <div>
            <AudioPlayer 
              audioFiles={playList}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadBacking;
