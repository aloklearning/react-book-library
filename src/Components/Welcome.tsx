import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const WelcomePage = () => {
    const navigate = useNavigate();
    const goToHomePage = (): void => {
       navigate({
        pathname: '/home',
        search: '?page=1&itemsPerPage=20&filters=null'
       });
    }

    return (
        <div style={{ padding: '15% 30% 15% 15%'}}>
            <Typography 
            fontWeight='bold'
            fontFamily='Poppins'
            component="div"
            sx={{ fontSize: {md: '2.5rem', xs: '1.5rem'}}}>
                Welcome to Book Bloc
            </Typography>

            <Typography 
            component='div'
            fontWeight='600'
            fontFamily='Poppins'
            sx={{ mt: 1, mb: 2, fontSize: {md: '1.3rem', xs: '1rem'}}}>
                Find your next book at a single place. Know more about it and choose
                which one is made for you. So what are you waiting for, ready to explore?
                Let's Go
            </Typography>

            <Button 
                size='large' 
                variant="contained"
                onClick={goToHomePage}>
                    Explore
                </Button>
        </div>
    );
}

export default WelcomePage;