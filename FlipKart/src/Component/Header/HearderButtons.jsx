import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core"
import { ShoppingCart } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useState } from "react";
// Components
import Login from "../Home/Login"


const useStyle = makeStyles({
    login: {
        background: "#FFFFFF",
        color: "#2874f0",
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        padding: "5px 40px",
        boxShadow: "none"
    },
    wrapper: {
        margin: "0 7% 0 auto",
        display: "flex",
        "& > *": {
            marginRight: 50,
            alignItem: "center",
            textDecoration: "none",
            color: "#fff",

        }
    },
    container: {
        display: "flex",
        textDecoration: "none",

    },

})
const HearderButtons = () => {
    const classes = useStyle();
    const [open , setOpen] = useState()

    const openLogindailog=()=>{
        setOpen(true)
    }
    return (
        <Box className={classes.wrapper}>
            <Link to="/">
                <Button variant="contained" className={classes.login} onClick={openLogindailog}>
                    Login
                </Button>
            </Link>
            <Link to="/">
             <Typography style={{ marginTop: "4px" }}>
             More
             </Typography>
             </Link>
            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>


            </Link>
            <Login open={open} setOpen={setOpen}/>
        </Box>
    )
};

export default HearderButtons;
