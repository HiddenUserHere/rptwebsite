import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{ ...style, display: 'block' }} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronRight}
        size="3x"
        className="slick-arrow-icon-right"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div style={{ ...style, display: 'block' }} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="3x"
        className="slick-arrow-icon-left"
      />
    </div>
  );
}

function SlickCarouselArrowChange(props) {
  var settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slick-slider">
      <Slider {...settings}>
        {props.searchResults.map((image, index) => (
          <div key={index}>
            <img src={image.urls.small} />{' '}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickCarouselArrowChange;
