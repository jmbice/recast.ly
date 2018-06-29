class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerVideo: exampleVideoData[0],
      allData: exampleVideoData,
      search: ''
    };
    this.selectVideo = this.selectVideo.bind(this);
    this.searchBarValue = this.searchBarValue.bind(this);
    this.searchYouTube = this.searchYouTube.bind(this);
  }

  //future methods go here!
  selectVideo(e) {
    this.setState({ playerVideo: e });
  }

  searchBarValue(event) {
    console.log(this.state.search);
    this.setState({ search: event.target.value });
  }

  searchYouTube() {
    var that = this;
    
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      maxResults: 5,
      data: {
        'part': 'snippet',
        'q': this.state.search,
        'type': 'video',
        'videoEmbeddable': 'true',
        'key': 'AIzaSyCMXnAZWmv0koFuk8VpytRB9psK6UxKWdc',
      },
      success: function (data) {
        that.setState({playerVideo: data.items[0], allData: data.items});
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('youtube: Failed to get videos');
      }
    });
  
  }





  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchBarValue={this.searchBarValue} searchYouTube={this.searchYouTube} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.playerVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.allData} method={this.selectVideo}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly define
window.App = App;


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><Search /></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//        <div><VideoPlayer /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList data={exampleVideoData} /></div>
//       </div>
//     </div>
//   </div>
// );
