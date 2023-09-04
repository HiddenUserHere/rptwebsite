import React from 'react';
import { Link } from 'react-router-dom';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'NOVO UPDATE',
      date: '23 ABR',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
      redirect: '/notice',
    },
    {
      id: 2,
      title: 'NOVO UPDATE',
      date: '23 ABR',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
      redirect: '/notice',
    },
    {
      id: 3,
      title: 'NOVO UPDATE',
      date: '23 ABR',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
      redirect: '/notice',
    },
    {
      id: 4,
      title: 'NOVO UPDATE',
      date: '23 ABR',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
      redirect: '/notice',
    },
  ];

  return (
    <div className="notice-home">
      {news.map(({ id, title, date, description, image, redirect }, index) => (
        <div key={`notice-keys-${index}`}>
          <Link to={redirect}>
            <div className="content-notice">
              <div className="notice">
                <div className="notice-image">
                  <img alt="image" src={`../src/assets/img/news/${id}.jpg`} />
                </div>
                <div className="content-notice2">
                  <span>{date}</span>
                  <h1>{title}</h1>
                  <div className="notice-divider">
                    <img src="../src/assets/img/news/ornament.png"></img>
                  </div>
                  <div key={`notice-keys-${index}`}>
                    <h2>{description}</h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
