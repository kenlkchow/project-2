import React from 'react'
import axios from 'axios'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: {
        results: []
      },
      search: ''
    }
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_Key}`)
      .then(res => this.setState({ movies: res.data }) )
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.movies.results)
    return (<div>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className='column'>
                <input onChange={(e) => this.handleChange(e)} type='text' className='input is-large' placeholder='Search all Movies' />
              </div>
              <div className='column is-one-quarter'>
                <button type="submnit" value='submit'className='button is-link'>Search</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.movies.results.map((result, i) => {
              return <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <Link className="subtitle" to={`/main/${result.id}`}>{result.title}</Link>
                    <p>{result.release_date}</p>
                    <p className="has-text-grey-darker"></p>
                  </div>
                </div>
              </div> 
            })}  
          </div>
        </div>
      </div>
    </div>
    )
  }

}