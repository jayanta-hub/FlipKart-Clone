import { Box, makeStyles } from "@material-ui/core"
// Components
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from "./Slide";
import MiddleSection from "./MiddleSection"

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: "#f2f2f2"
    },
    wrapper:{
        padding: 5,
        background: "#FFFFFF",
        margin:"12px 0 0 10px",
        width:"17%"
    }
}
);

const Home = () => {
    const classes = useStyle();
    const addurl='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display:"flex"}}>
                    <Box style={{width:"82%"}}>
                        <Slide 
                        timer={true}
                        title="Super saver Deal Of The Day"
                        />

                    </Box>
                    <Box className={classes.wrapper}>
                    <img src={addurl} alt="" style={{width:220}}/>
                    </Box>
                </Box>
                <MiddleSection/>
                <Slide timer={false} title="Discount for you"/>
                <Slide timer={false} title="Suggest Item"/>
                <Slide timer={false} title="Top Selection"/>
                <Slide timer={false} title="Recommanded Item"/>
                <Slide timer={false} title="Best sellers"/>

            </Box>
        </div>
    )
};

export default Home;
