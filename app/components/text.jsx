import React from 'react';

import Images from './Images.jsx';

export default class PageHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      images: [
        'http://38.media.tumblr.com/tumblr_lrbu1l9BJk1qgzxcao1_250.gif',
        'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4',
        'htt://38.media.tumblr.com/tumblr_lrbu1l9BJk1qgzxcao1_250.gif'
      ]
    }
  }

  next() {
    if (this.state.count < this.state.images.length - 1) this.setState({count: this.state.count + 1});
  }

  back() {
    if (this.state.count > 0) this.setState({count: this.state.count - 1});
  }

  getIamge() {
    return this.state.images;
  }

  render() {
    return (
      <div>
        <button onClick={this.back.bind(this)}> Back </button>
        <button onClick={this.next.bind(this)}> Next </button>
        <Images onClick={this.next.bind(this)} links={this.getIamge()} target={this.state.count} />
      </div>
    );
  }

}
