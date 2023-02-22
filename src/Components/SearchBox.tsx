import React, { useState } from "react";
import { Box, Grid, Button, TextField } from "@mui/material";

interface SearchBoxParams {
    searchedValue: string | null;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
    setFilters: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchBox = ({ searchedValue, setPageNumber, setFilters }: SearchBoxParams) => {
    const [searchText, setSearchText] = useState(searchedValue !== 'null' ? searchedValue : '');

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(e.target.value);
    }

    const onSearch = (): void => {
        if(searchText) {
            setPageNumber(1); // Resetting the index
            setFilters(searchText);

            return;
        }
    }

    const onClearFilter = (): void => {
        if(searchText) {
            // Resetting everything
            setSearchText('');
            setPageNumber(1);
            setFilters('null');

            return;
        }
    }

    return(
        <Box sx={{ flexGrow: 1, padding: '0 15%' }}>
            <Grid container spacing={2} sx={{ pt: 3 }}>
                <Grid item xs={12}>
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

                <Grid item xs={12}>
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
                        marginBottom: { xs: 2, md: 0 }
                    }}
                    onClick={onSearch}>
                        Search
                    </Button>

                    <Button
                    size="medium"
                    variant="contained"
                    sx={{
                        ml: 2,
                        fontWeight: 'bold',
                        backgroundColor: '#D288DA',
                        ':hover': {
                            color: '#000',
                            backgroundColor: '#fff'
                        },
                        marginBottom: { xs: 2, md: 0 }
                    }}
                    onClick={onClearFilter}>
                        Clear Filter
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchBox;