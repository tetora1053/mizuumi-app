import React from 'react'
import {
  Link,
} from "react-router-dom"

class GenreList extends React.Component {
  constructor(props) {
    super(props)
    this.props.getGenres()

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    console.log(e.target.value)
    if (e.target.value == "all") {
      this.props.getMovieTmbs()
    } else {
      this.props.getMovieTmbsByGenreId(e.target.value)
    }
  }

  render() {
    const genreOptions = this.props.genres.map((genre) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ))

    return (
      <select onChange={this.onChange}>
        <option value="all">all</option>
        {genreOptions}
      </select>
    )
  }
}

export default GenreList

