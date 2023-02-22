import { Component } from "react";
import { Book } from "../Interfaces/bookInterface";
import BookIcon from '@mui/icons-material/Book';
import { 
    Card, 
    CardActions,
    IconButton, 
    Typography
} from '@mui/material';

interface BookCardProps {
    book: Book
}

interface SubContentProps {
    title: string;
    content: string | any;
}

class SubContent extends Component<SubContentProps> {
    render() {
        return (
            <CardActions sx={{mt: 0, pt: 0}} disableSpacing>
                <Typography 
                sx={{pl: 5, fontSize: {md: '1rem', xs: '0.9rem'}}}>
                    {this.props.title}:&nbsp;
                </Typography>

                <Typography 
                color="text.secondary" 
                sx={{fontSize: {md: '1rem', xs: '0.9rem'}}}>
                    {this.props.content}
                </Typography>
            </CardActions>
        );
    }
}

class BooksCard extends Component<BookCardProps> {
    render() {
        const bookItem = this.props.book;
        return (
            <div style={{ padding: '0 15%'}}>
                <Card 
                sx={{ minWidth: 275, mb: '20px' }}>
                    <CardActions disableSpacing sx={{pb: 0}}>
                        <IconButton aria-label="book">
                            <BookIcon />
                        </IconButton>
                        
                        <Typography 
                        noWrap
                        component="div"
                        variant="subtitle1" 
                        sx={{fontSize: {md: '1rem', xs: '0.9rem'}, fontWeight: '600'}}>
                            {bookItem.book_title}
                        </Typography>
                    </CardActions>

                    <SubContent title="Author" content={bookItem.book_author.map((author: string) => author)} />
                    <SubContent title="Book Pages" content={bookItem.book_pages} />
                    <SubContent title="Book Publication Year" content={bookItem.book_publication_year} />
                    <SubContent title="Book Publication City" content={bookItem.book_publication_city} />
                    <SubContent title="Book Publication Country" content={bookItem.book_publication_country} />
                </Card>
            </div>
        );
    }
}

export default BooksCard;