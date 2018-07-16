import React from 'react'
import { Link, Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './ListBook';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  moveBooks(book, shelf){
    BooksAPI.update(book, shelf).then(this.setState(prevState => {
      book.shelf = shelf
      let newBook = prevState.books.filter(b => (b.id !== book.id))
      newBook.push(book)
      return{
        books: newBook
      }
    }))
  }

  render() {
    return (
      <div className="app">
				<Route exact path='/' render={() => (
					<div>
						<ListBook
							books={this.state.books}
							onMoveBook={(book, shelf) => this.moveBooks(book, shelf)} />
						<hr />

						<div className="open-search">
							<Link to='/search'>Add a book</Link>
						</div>
					</div>
				)} />

				<Route exact path='/search' render={() => (
					<div>
						<SearchBook 
							books={this.state.books}
							onMoveBook={(book, shelf) => this.moveBooks(book, shelf)}
						/>
						</div>
				)} />
			</div>
    )
  }
}

export default BooksApp
