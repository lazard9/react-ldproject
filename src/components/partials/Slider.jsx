import { useRef, useState, useEffect } from "react";
import { fetchAllDestinations } from "@/api/destinations";
import SpinnerPuffLoader from "./SpinnerPuffLoader";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import SliderCard from "./SliderCard";
import "./Slider.scss";

// import slides from "../../slider-cards.json";

/**
 * A slider component that displays a list of destination cards.
 *
 * Fetches data from an API when mounted and displays a loading spinner
 * while data is being fetched.
 *
 * Uses Swiper.js for the slider functionality.
 *
 * @returns {React.ReactElement} A JSX element containing the slider.
 */
const Slider = () => {
  const [sliderDestinationCards, setSliderDestinationCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchAllDestinations();
        setSliderDestinationCards(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={"true"}
        navigation={true}
        pagination={{ clickable: true }}
        // pagination={{
        //     type: "progressbar",
        // }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        // scrollbar={{ draggable: true }}
      >
        {loading ? (
          <SpinnerPuffLoader />
        ) : (
          sliderDestinationCards.slice(0, 3).map((slide) => (
            <SwiperSlide key={slide.id}>
              <SliderCard slide={slide} />
            </SwiperSlide>
          ))
        )}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
