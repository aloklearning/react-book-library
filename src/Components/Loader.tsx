import { CircularProgress } from "@mui/material";

const Loader = () => {
    return(
        <div style={{ textAlign: 'center', padding: '15% 0' }}>
            <CircularProgress size={45}/>
            <h2>Loading Data. Please Wait...</h2>
        </div>
    );
}

export default Loader;