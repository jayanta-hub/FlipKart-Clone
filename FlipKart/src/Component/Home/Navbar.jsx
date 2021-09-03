import React from 'react'
import { Box, Typography, makeStyles } from "@material-ui/core"
// Components
import { navData } from "../../Constants/data.js"

const useStyle = makeStyles({
    component: {
        display: "flex",
        margin: "55px 30px 0 30px",
        justifyContent: "space-between",
        height:"115px"
    },
    container: {
        textAlign: "center",
        padding: "12px 25px",

    },
    image: {
        width: "55px",
        marginTop:"10px"

    },
    text: {
        fontSize: 14,
        fontWeight: 600,
    }
});
const Navbar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map((data) => (
                    <Box className={classes.container}>
                        <img src={data.url} alt="" className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            };
        </Box>
    )
}

export default Navbar;
