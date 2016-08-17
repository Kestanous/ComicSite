import React from 'react';
import ImageLoader from 'react-imageloader';

export default class Images extends React.Component {

  preloader() {
    return <img src="https://d13yacurqjgara.cloudfront.net/users/82092/screenshots/1073359/spinner.gif" />;
  }

  render() {
    let key = 0;
    let images = [];
    if (this.props.links && this.props.links.length)
      images.push(
        <ImageLoader preloader={this.preloader.bind(this)} key={key} imgProps={{className:'image-loaded'}} src={this.props.links[this.props.target]}>
          Image load failed!
        </ImageLoader>
      )
      for (var i = this.props.target; i < this.props.target + 5; i++) {
        if (this.props.links[i]) images.push(
          <ImageLoader preloader={this.preloader.bind(this)} key={++key} className='image' src={this.props.links[i]}>
            Image load failed!
          </ImageLoader>
        )
      }
    return (
      <div onClick={this.props.onClick}> {images} </div>
    );
  }
}
