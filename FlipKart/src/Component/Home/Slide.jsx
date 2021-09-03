import { makeStyles, Box } from "@material-ui/core"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
// omponent

import { products } from '../../Constants/data';


const useStyle = makeStyles({
    image: {
        height: "180px",

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
    }
};
const Slide = () => {
    const classes = useStyle();
    return (
        <Box>
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
                        <img src={product.url} alt="" className={classes.image} />

                    ))
                }

            </Carousel>
        </Box>
    )
}

export default Slide;
