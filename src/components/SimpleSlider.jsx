import Slider from "react-slick";
import SlideBanner from "./SlideBanner";

const SimpleSlider = () => {
  return (
    <Slider
      // dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      //   slidesToScroll={1}
    >
      <SlideBanner />
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
