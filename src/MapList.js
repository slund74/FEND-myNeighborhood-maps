import React, {Component} from 'react'
import './App.css'

class MapList extends Component {

  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.filter(books => books.shelf === this.props.shelf).map(books => (
            <li key={books.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select name="shelf" value={this.props.shelf} onChange={(event) => this.props.moveToShelf(books,event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                </div>
                <div className="book-title">{books.title}</div>
                <div className="book-authors">{books.authors[0]}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default MapList