import { AppBar, Toolbar, makeStyles, Typography, Box } from "@material-ui/core";
import {Link} from "react-router-dom"
// Component
import SearchBar from "./SearchBar";
import HearderButtons from "./HearderButtons";

const useStyle = makeStyles({
    header: {
        background: "#2874f0",
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: "flex",
        color:"#fff",
    },
    component: {
        marginLeft: "12%",
        lineHeight: 0,
        marginTop: 0,
        marginBottom: 5,
        textDecoration:"none"
        

    },
    subheading: {
        fontSize: 11,
        fontStyle: "italic"
    }

})
const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Link to="/" className={classes.component}>
                    <img src={logoURL} alt="" className={classes.logo} />

                    <Box className={classes.container}>
                        <Typography className={classes.subheading}>Explore
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box></Typography>
                        <img src={subURL} alt="" className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar />
                <HearderButtons />
            </Toolbar>
        </AppBar>
    )
};
export default Header;
