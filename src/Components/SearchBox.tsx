import React, { useState } from "react";
import { Box, Grid, Button, TextField } from "@mui/material";

interface SearchBoxParams {
    setFilters: React.Dispatch<any>
}

const SearchBox = ({ setFilters }: SearchBoxParams) => {
    const [searchText, setSearchText] = useState('');

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(e.target.value);
    }

    const onSearch = (): void => {
        if(searchText){
            setFilters([{type: 'all', values: [searchText]}]);
            return;
        }
    }

    return(
        <Box sx={{ flexGrow: 1, padding: '0 15%' }}>
            <Grid container spacing={2} sx={{ pt: 3 }}>
                <Grid item md={9} xs={12}>
                    <TextField  
                        size="small"
                        value={searchText}
                        variant="outlined" 
                        id="outlined-basic" 
                        onChange={onChangeText}
                        label="Enter Search Value"
                        sx={{ minWidth: '-webkit-fill-available', mt: 2 }}
                    />
                </Grid>

                <Grid item md={3} xs={12}>
                    <Button
                    size="medium"
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        backgroundColor: '#D288DA',
                        ':hover': {
                            color: '#000',
                            backgroundColor: '#fff'
                        },
                        marginTop: { xs: 0, md: 2 }, 
                        marginBottom: { xs: 2, md: 0 }
                    }}
                    onClick={onSearch}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchBox;