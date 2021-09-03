import { makeStyles, Box, Typography, Button } from "@material-ui/core"
import Countdown from "react-countdown"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
// omponent

import { products } from '../../Constants/data';


const useStyle = makeStyles({
    image: {
        height: "180px",

    },
    carousel: {
        width: "83%",


    },
    box: {
        marginTop: 10,
        backgroundColor: "#ffffff"

    },
    offer: {
        padding: "15px 20px",
        display: "flex"
    },
    offertext: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: "35px",
        marginRight: 25
    },
    timer: {
        color: "#7f7f7f",
        display: "flex",
        alignItems: "center"
    },
    offerbutton: {
        marginLeft: "auto",
        background: "#2874f0",
        borderRadius: 2,
        color: "#ffffff",
        fontSize: 13,

    },
    text:{
        fontSize:14,
        marginTop:5
    }

});


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    },

};
const Slide = () => {
    const classes = useStyle();
    // const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
    }


    return (
        <Box className={classes.box} >
            <Box className={classes.offer}>
                <Typography className={classes.offertext}>
                    Super saver Deal Of The Day
                </Typography>
                <img src={timerURL} alt="" style={{ width: 24, marginRight: 5 }} />
                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                <Button variant='contained' color="primary" className={classes.offerbutton}> VIEW ALL</Button>
            </Box>
            <Carousel
                responsive={responsive}
                infinite={true}
                draggabl={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {

                    products.map((product) => (
                        <Box textAlign="center">
                        <img src={product.url} alt="" className={classes.image} />
                        <Typography className={classes.text} style={{fontWeight:600, color:"#212121"}}>{product.title.shortTitle}</Typography>
                        <Typography  className={classes.text} style={{color:'green'}}>{product.discount}</Typography>
                        <Typography  className={classes.text} style={{ color:"#212121", opacity:".6"}}>{product.tagline}</Typography>
                        </Box>
                    ))
                }
            </Carousel>
        </Box>

    )
}

export default Slide;
