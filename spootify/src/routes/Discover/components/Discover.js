import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import makeRequest from "../api/makeRequest";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  componentDidMount() {
    makeRequest("new-releases").then((res) => {
      console.log(res.data.albums.items);
      this.setState({ newReleases: res.data.albums.items });
    });
    makeRequest("featured-playlists").then((res) => {
      console.log(res.data.playlists.items);
      this.setState({ playlists: res.data.playlists.items });
    });
    makeRequest("categories").then((res) => {
      console.log(res.data.categories.items);
      this.setState({ categories: res.data.categories.items });
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
