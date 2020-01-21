import React from 'react'
import axios from 'axios'

class SingleMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      movie: {
        genres: [{}]
      }
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_Key}`)
      .then(res => this.setState({ movie: res.data }) )
      .catch(err => console.log(err))
  }
  
  render(){
    console.log(this.state.movie.genres[0].name)
    return (
      <div className='container'>
        <div className='card'>
          <div className='columns'>
            <div className='column is-one-third'>
              <img className='single' src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}/>
            </div>
            <div className='column' >
            
              <h1>{this.state.movie.title}</h1>
        
              <p>Vote avarage {this.state.movie.vote_average} </p>
           
              <p>{this.state.movie.overview}</p>
              <p>Relase date: {this.state.movie.release_date}</p>

              <p>Genre: {this.state.movie.genres[0].name}</p>
             
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default SingleMovie 