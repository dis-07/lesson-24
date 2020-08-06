import * as React from 'react';
import Photo from './components/Photo'
import './App.css';

class App extends React.Component {
  state = {
    albums: {},
    albumId: null
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photos => this.setState({
        albums: photos.reduce((accumulator, item) => {
          if (!Array.isArray(accumulator[item.albumId])) {
            accumulator[item.albumId] = []
          }

          accumulator[item.albumId].push(item)

          return accumulator
        }, {})
      }))
  }

  handleClick = (albumId) => this.setState({ albumId })

  render = () => {
    if (this.state.albumId) {
      const album = this.state.albums[this.state.albumId]

      return album.map(photo => (
        <Photo photo={photo} />
      ))
    }

    const albums = Object.values(this.state.albums)
    return albums.map(album => {
      const photo = album[0]

      return (
        <Photo
          photo={photo}
          onClick={this.handleClick}
        />
      )
    })
  }
}

export default App;
