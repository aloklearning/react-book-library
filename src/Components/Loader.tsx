import { CircularProgress, Typography } from "@mui/material";

const Loader = () => {
    return(
        <div style={{ textAlign: 'center', padding: '15% 0' }}>
            <CircularProgress />
            {/* <h2>Loading Data. Please Wait...</h2> */}
            <Typography
            fontFamily='Poppins'
            sx={{fontSize: {md: '1.5rem', xs: '0.9rem'}, fontWeight: 'bold'}}>
                Loading Data. Please Wait...
            </Typography>
        </div>
    );
}

export default Loader;