import { Component } from "react";
import { Book } from "../Interfaces/bookInterface";

import { 
    MapTwoTone,
    BookTwoTone,
    GroupTwoTone,
    MenuBookTwoTone,
    LocationOnTwoTone,
    CalendarMonthTwoTone,
} from "@mui/icons-material";

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
    icon: any;
}

class SubContent extends Component<SubContentProps> {
    render() {
        return (
            <CardActions sx={{mt: 0, pt: 0, pb: 0}} disableSpacing>
                <IconButton aria-label="book" sx={{pt: 0, pb: 1}}>
                    {this.props.icon}
                </IconButton>

                <Typography 
                sx={{fontSize: {md: '1rem', xs: '0.9rem'}, mb: 0.8}}>
                    {this.props.title}:&nbsp;
                </Typography>

                <Typography 
                color="text.secondary" 
                sx={{fontSize: {md: '1rem', xs: '0.9rem'}, mb: 0.8}}>
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
                sx={{ 
                    pb: 1, 
                    mb: '20px', 
                    minWidth: 275, 
                    borderRadius: 3, 
                    border: '4px solid green'}}
                >
                    <CardActions disableSpacing sx={{pb: 0}}>
                        <IconButton aria-label="book">
                            <BookTwoTone />
                        </IconButton>
                        
                        <Typography 
                        noWrap
                        component="div"
                        variant="subtitle1" 
                        sx={{fontSize: {md: '1rem', xs: '0.9rem'}, fontWeight: '600'}}>
                            {bookItem.book_title}
                        </Typography>
                    </CardActions>

                    <SubContent 
                        title="Author" 
                        icon={<GroupTwoTone />}
                        content={bookItem.book_author.map((author: string) => author)} 
                    />

                    <SubContent 
                        title="Book Pages" 
                        icon={<MenuBookTwoTone />}
                        content={bookItem.book_pages} 
                    />

                    <SubContent 
                        icon={<CalendarMonthTwoTone />}
                        title="Book Publication Year" 
                        content={bookItem.book_publication_year} 
                    />

                    <SubContent 
                        icon={<LocationOnTwoTone />}
                        title="Book Publication City" 
                        content={bookItem.book_publication_city} 
                    />

                    <SubContent 
                        icon={<MapTwoTone />}
                        title="Book Publication Country" 
                        content={bookItem.book_publication_country} 
                    />
                </Card>
            </div>
        );
    }
}

export default BooksCard;