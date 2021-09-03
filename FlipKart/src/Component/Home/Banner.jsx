import Carousel from "react-material-ui-carousel"
import { Box, makeStyles, } from "@material-ui/core";
// Component
import { bannerData } from "../../Constants/data.js"

const useStyle = makeStyles({
    image: {
        width: "100%",
        height: "280px"
    },
    carousel:{
        marginTop:10,
    }
});

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:"#FFFFFF",
                    color : "#494949",
                    borderRadius :4,
                    marginLeft:0,
                    height:"100px",
                    marginRight:0,
                }
            }}
            className={classes.carousel}
        >

            {
                bannerData.map((image) => (
                    <Box className={classes.image}>
                        <img src={image} alt="" />
                    </Box>
                ))
            }
        </Carousel>
    )
};

export default Banner;
