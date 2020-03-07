import React from 'react'
import {
  Link,
} from "react-router-dom"

class Movie extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getMovieById(id)
  }

  render() {
    const { id } = this.props.match.params
    return (
      <div className="moviePage">
        <p>MoviePage</p>
        <p>{id}</p>
        <p>{this.props.title}</p>
        <img src={`http://api.mizuumi.tetora1053.jp/movies/${id}/image`}/>
        <p>{this.props.overview}</p>
        <p>{this.props.releaseDate}</p>
        {
          this.props.genres.map((genre, i) => (
            <Link to={`/genres/${genre.id}`} key={i}>
              <div>{genre.name}</div>
            </Link>
          ))
        }
      </div>
    )
  }
}

export default Movie

