import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends Component {
  state = {
    videos: [],
  };
  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />I have{" "}
        {this.state.videos.length} of videos
      </div>
    );
  }
}

export default App;
