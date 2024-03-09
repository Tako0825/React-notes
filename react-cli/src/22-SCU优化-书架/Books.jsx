import React, { PureComponent } from 'react'
import books from './data.json'

export class Books extends PureComponent {
    constructor() {
        super()
        this.state = { books }
    }

    increase(id) {
        this.setState((state, props) => {
            // 浅拷贝（直接修改 state 会导致比对发现不出差异）
            const books = [...state.books]
            books.map(book => {
                if(book.id === id) book.price++
                return book
            })
            return { books }
        })
    }

    addBook() {
        this.setState((state, props) => {
            const books = [...state.books]
            books.push({
                id: books[books.length - 1].id + 1,
                name: "React设计原理",
                price: 199
            })
            return { books }
        })
    }

    render() {
        const { books } = this.state
        return (
            <ul>
                {
                    books.map(book => (
                        <li key={book.id}>
                            {book.name}-{book.price}
                            <button 
                                onClick={() => this.increase(book.id)}
                            >+1</button>
                        </li>
                    ))
                }
                <li><button onClick={() => this.addBook()}>add</button></li>
            </ul>
        )
    }
}

export default Books