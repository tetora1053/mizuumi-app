import React from 'react'

class Movie extends React.Component {

  componentWillMount() {
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
        <p>{this.props.overview}</p>
        <p>{this.props.releaseDate}</p>
        {
          this.props.genres.map((genre, i) => {
            return <div key={i}>{genre}</div>
          })
        }
      </div>
    )
  }
}

export default Movie

