import React, { Component } from 'react'
import { 
  discoverMovies, 
  searchMovies,
  searchMovieDetails,
} from '../helpers/api'
import { 
  Gallery, 
  SearchBar 
} from '../components'

class QuickFlickPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchText: '',
      searched: false
    }
  }

  componentDidMount() {
    discoverMovies()
      .then(data => this.setState({ movies: data }))
  }

  handleSearchText = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSearch = () => {
    searchMovies(this.state.searchText)
      .then(data => this.setState({ movies: data}))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(this.state.searchText)
    .then(data => this.setState({ movies: data, searched: true}))

  }

  saveMovie = (movieID) => {
    searchMovieDetails(movieID)
      .then(data => {
        // here just grab the info from the json and put 
        // ur firebase logic here to PUT/POST
        console.log(data)
      })
  }

  render() {
    const { movies, searched } = this.state

    return (
      <div>
        <SearchBar 
          handleSearchText={this.handleSearchText} 
          handleSearch={this.handleSearch} 
          handleSubmit={this.handleSubmit}
        />
        { searched && <Gallery movies={movies} saveMovie={this.saveMovie} /> }
      </div>
    )
  }

}

export default QuickFlickPicker