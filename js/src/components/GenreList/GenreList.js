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
    this.props.handleGenreSelectChange(e.target.value)
  }

  render() {
    const genreOptions = this.props.genreList.map((genre) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ))

    return (
      <select onChange={this.onChange} value={this.props.currentId}>
        <option value="all">all</option>
        {genreOptions}
      </select>
    )
  }
}

export default GenreList

