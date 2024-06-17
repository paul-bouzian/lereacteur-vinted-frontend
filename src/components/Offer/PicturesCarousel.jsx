import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PicturesCarousel({ pictures }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      pauseOnHover
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {pictures.map((picture, index) => {
        return (
          <div key={index} className="h-[630px] max-sm:h-[500px]">
            <img
              src={picture ? picture.secure_url : ""}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default PicturesCarousel;
