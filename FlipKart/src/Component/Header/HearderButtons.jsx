import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core"
import { ShoppingCart } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
// Components
import Login from "../Home/Login";
import { LoginContext } from "../../Context/ContextProvider";
import Profile from "./Profile"


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
        margin: "0 7% 0 15%",
        display: "flex",
        "& > *": {
            // marginRight: 40,
            marginLeft: 40,
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
    const [open, setOpen] = useState();
    const { account, setAccount } = useContext(LoginContext);

    const openLogindailog = () => {
        setOpen(true)
    }
    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account = {account} setAccount={setAccount}/>
                    :
                    <Link to="/">
                        <Button variant="contained" className={classes.login} onClick={openLogindailog}>
                            Login
                        </Button>
                    </Link>
            }
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
            <Login open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
};

export default HearderButtons;
