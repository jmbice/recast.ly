class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVideo: exampleVideoData[0],
      allData: exampleVideoData
    };
  }

  //future methods go here!

  selectVideo(props) {
    this.setState();
    console.log('click happened');
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer data={window.appState.firstVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList data={this.state.allData} /></div>
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
