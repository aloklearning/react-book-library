import { Component } from "react";
import { Book } from "../Interfaces/bookInterface";

interface BookCardProps {
    book: Book
}

class BooksCard extends Component<BookCardProps> {
    render() {

        const bookItem = this.props.book;
        return (
            <div style={{ padding: '0 15%'}}>
                <h2>{bookItem.id}</h2>
            </div>
        );
    }
}

export default BooksCard;