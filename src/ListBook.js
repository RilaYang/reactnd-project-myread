import React from 'react';
import BookShelf from './BookShelf';

class ListBook extends React.Component{
    state = {
        bookshelve:[
            {title : 'currently reading', id : 'currentlyReading'},
            {title : 'want to read', id : 'wantToRead'},
            {title : 'readed', id : 'readed'}
        ]
    }

    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {this.state.bookshelve.map(shelf => (
                        <BookShelf
                            key={shelf.id}
                            name={shelf.id}
                            displayName={shelf.title}
                            books={this.props.books}
                            onMoveBook={this.props.onMoveBook}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default ListBook