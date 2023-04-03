import React, { useEffect, useState } from 'react';
import imageButtonPlay from '../../assets/img/btn_play.png';
import imageLeftSlide from '../../assets/img/left.png';
import imageOrnament from '../../assets/img/ornament2.png';
import imageRightSlide from '../../assets/img/right.png';
import '../../pages/Home/styles.css';
import { gameClasses } from './settings.jsx';

const SliderClass = () => {
  const [slideShow, setSlideShow] = useState(0);

  const handlePlayVideo = (id) => {
    const video = document.getElementById(id);

    if (video.paused) {
      video.play();
      video.classList.add('play');
    } else {
      video.pause();
      video.classList.remove('play');
    }
  };

  useEffect(() => {
    document.querySelector(
      '.slider-class-box',
    ).style.transform = `translateX(-${slideShow * 100}vw)`;
    document.querySelectorAll('.video-class').forEach((item) => {
      item.pause();
      item.classList.remove('play');
    });
  }, [slideShow]);

  const handlePreviousSlide = () => {
    if (slideShow === 0) return;
    setSlideShow((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    if (slideShow + 1 === gameClasses.length) return;
    setSlideShow((prev) => prev + 1);
  };

  return (
    <div className="sliderclass-home">
      <div className="slider-class-box">
        {gameClasses.map(
          ({ job, poster, desc, weapon, image, video }, index) => (
            <div className="slide-box" key={`class2-keys-${index}`}>
              <div className="content-class">
                <div className="class-field">
                  <div className="class-image">
                    <div className="elementoclass"></div>
                    <img alt="image" src={`${image}`} />
                  </div>
                  <div className="content-class2">
                    <h1>{job}</h1>
                    <h2>Main weapons: {weapon}</h2>
                    <div className="dividerclass">
                      <img src={imageOrnament} alt=""></img>
                    </div>
                    <h3>{desc}</h3>
                    <div className="video-content">
                      <video
                        id={`video2-${index}`}
                        className="video-class"
                        poster={`${poster}`}
                        muted
                        loop
                      >
                        <source src={`${video}`} type="video/mp4" />
                      </video>
                      <button
                        className="buttonHandleVideo stylebtn"
                        onClick={() => handlePlayVideo(`video2-${index}`)}
                      >
                        <img src={imageButtonPlay} alt="Play"></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="box-list-indicator">
        {gameClasses.map((item, index) => (
          <div
            key={`indicator-list-${index}`}
            className={`indicator-list ${index === slideShow ? 'select' : ''}`}
          ></div>
        ))}
      </div>

      <div className="btn-handle-slider">
        <button onClick={handlePreviousSlide}>
          <img src={imageLeftSlide} alt="Previous"></img>
        </button>
        <button onClick={handleNextSlide}>
          <img src={imageRightSlide} alt="Next"></img>
        </button>
      </div>
    </div>
  );
};

export default SliderClass;
