import React from 'react'
// Component
import { makeStyles, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';


const useStyle = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: "#fff",
        marginLeft: 10,
        width: '40%',
        display: "flex",
        marginBottom: 5,
        justifyContent: 'center',
        
    },
    searchIcon: {
        padding:5,
        height: '100%',
        display: 'flex',
        color: "blue"
    },
    inputRoot: {
      fontSize:"unset",
        width: "100%"
    },
    inputInput: {
        paddingLeft:20,
        
    }
}))
const SearchBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.search}>

            <InputBase
                placeholder="Search For products,brands and more"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <Search />
            </div>
        </div>
    )
};
export default SearchBar;
