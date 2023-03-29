import React from 'react'
import { useState, useEffect } from 'react';
import '../haru/home.css';
import { FaBeer } from 'react-icons/fa'

export default function SliderClass() {
  const [slideShow, setSlideShow] = useState(0)


  const sliderclass = [
    {
      id: 1,
      class2: 'Lutador',
      desc: 'Os Lutadores são os melhores na luta corpo-a-corpo. Suas habilidades são perfeitas para combates a curta distância.',
      weapon: 'Especialista em Machados',
      image: '../src/assets/img/class/slider-fighter.png',
      poster: "../src/assets/img/class/fs.jpg",
      video: '../src/assets/img/class/destroyer.mp4',
    },
    {
      id: 2,
      class2: 'Arqueira',
      desc: 'As Arqueiras são as melhores no combate a longa distância e na técnica com o Arco e Flecha.',
      weapon: 'Especialista em Arco',
      image: '../src/assets/img/class/slider-archer.png',
      poster: "../src/assets/img/class/as.jpg",
      video: '../src/assets/img/class/phoenix_shot.mp4',
    },
    {
      id: 3,
      class2: 'Assassina',
      desc: 'Assassinas são da tribo Tempskrons e utilizam espadas duplas (Adagas) como arma primária. Elas são especialistas em habilidades de assassinos, como se esconder, envenenar e etc',
      weapon: 'Especialista em Adaga',
      image: '../src/assets/img/class/slider-assassin.png',
      poster: "../src/assets/img/class/ass.jpg",
      video: '../src/assets/img/class/running_hit.mp4',
    },
    {
      id: 4,
      class2: 'Pike',
      desc: 'Os Pikes são os melhores com a Foice. Desferem golpes fatais nos inimigos e dominam as técnicas de furtividade.',
      weapon: 'Especialista em Foice',
      image: '../src/assets/img/class/slider-pike.png',
      poster: "../src/assets/img/class/ps.jpg",
      video: '../src/assets/img/class/pikeman.mp4',
    },
    {
      id: 5,
      class2: 'Mecanico',
      desc: 'Os Mecânicos são os únicos que podem manusear todo tipo de arma e equipamento. Você pode equipa-lo com Espadas de 1 mão e Foices, Espadas de 2 mãos e Garras, Machados e Martelos, até mesmo Arcos e Lanças',
      weapon: 'Mestre das Armas',
      image: '../src/assets/img/class/slider-mech.png',
      poster: "../src/assets/img/class/ms.jpg",
      video: '../src/assets/img/class/grand_smash.mp4',
    },
    {
      id: 6,
      class2: 'Xama',
      desc: 'Xamã possui habilidades fortes de magia negra, que se fortifica com o poder das trevas. Sua arma não é uma varinha, mas um fantasma em suas costas.',
      weapon: 'Especialista em Phantom',
      image: '../src/assets/img/class/slider-xama.png',
      poster: "../src/assets/img/class/xm.jpg",
      video: '../src/assets/img/class/shaman.mp4',
    },
    {
      id: 7,
      class2: 'Sacerdotisa',
      desc: 'As Sacerdotisas são as ministras da magia. Com seu treinamento espiritual, possuem o poder de cura e força destrutiva da natureza.',
      weapon: 'Especialista em Cajado',
      image: '../src/assets/img/class/slider-prs.png',
      poster: "../src/assets/img/class/prs.jpg",
      video: '../src/assets/img/class/priestess.mp4',
    },
    {
      id: 8,
      class2: 'Cavaleiro',
      desc: 'Os Cavaleiros são os Grandes guerreiros dos Morions. Com grande nobreza e Vigor, sua força vem da oração. Ponto máximo dessa tribo. Suas armas são Espadas e escudos. Cavaleiros podem usar Martelos também.',
      weapon: 'Especialista em Espada',
      image: '../src/assets/img/class/slider-ks.png',
      poster: "../src/assets/img/class/ks.jpg",
      video: '../src/assets/img/class/knigh.mp4',
    },
    {
      id: 9,
      class2: 'Mago',
      desc: 'Magos manipulam o poder extremo para combater os inimigos. Mestres no Controle das Forças da natureza, suas magias são fatais. Magos de uma certa classe podem até controlar a terra e as estrelas. Suas armas são Varinhas, Cajados e Orbitais.',
      weapon: 'Especialista em Cajado',
      image: '../src/assets/img/class/slider-mage.png',
      poster: "../src/assets/img/class/mage.jpg",
      video: '../src/assets/img/class/magician.mp4',
    },
    {
      id: 10,
      class2: 'Atalanta',
      desc: 'As Atalantas são capazes de encantar Lanças para derrotar Inimigos. Sua força ganha destaque quando o assunto é lutas a longa distância. Suas armas, como dito, são Lanças e Escudos.',
      weapon: 'Especialista em Lança e Escudo',
      image: '../src/assets/img/class/slider-ata.png',
      poster: "../src/assets/img/class/ata.jpg",
      video: '../src/assets/img/class/atalanta.mp4',
    },
    
  ];

  const playvideo = (id) => {

    const video = document.getElementById(id)

    if(video.paused) {
      video.play()
      video.classList.add('play')

    } else {
      video.pause()
      video.classList.remove('play')
    }


  }

  useEffect(() => {
    document.querySelector('.sliderclass-box').style.transform = `translateX(-${slideShow * 100}vw)`

    document.querySelectorAll('.video-class').forEach((item) => {
      item.pause()
      item.classList.remove('play')
    })

  }, [slideShow])

  return (
    <div className='sliderclass-home'>
      <div  className='sliderclass-box'>
        {sliderclass.map(({ id, class2, poster, desc, weapon, image, video }, index) => (
          <div className='slide-box' key={`class2-keys-${index}`}>
            <div className="content-class">
              <div className="class-field">
                <div className="class-image">
                  <div className='elementoclass'></div>
                  <img alt="image" src={`${image}`} />
                </div>
                <div className="content-class2">
                  <h1>{class2}</h1>
                  <h2>{weapon}</h2>
                  <div className="dividerclass"><img src="../src/assets/img/ornament2.png"></img></div>
                  <h3>{desc}</h3>
                  <div className='video-content'>
                  <video id={`video2-${index}`} className='video-class' poster={`${poster}`} muted loop>
                    <source src={`${video}`} type="video/mp4" />
                  </video>
                  <button className='buttonHandleVideo stylebtn' onClick={() => playvideo(`video2-${index}`)}><img src='../src/assets/img/btn_play.png'></img></button>
                </div></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="box-list-indicator">

          {sliderclass.map(({ id, class2}, index) => (
            <div key={`indicator-list-${index}`} className={`indicator-list ${index === slideShow ? 'select' : ''}`} ></div>
          ))}

      </div>

      <div className='btn-handle-slider'>
        <button onClick={() => {
          if (slideShow === 0) return
          setSlideShow(prev => prev - 1)
        }} ><img src='../src/assets/img/left.png'></img></button>
        <button onClick={() => {
          if (slideShow + 1 === sliderclass.length) return
          setSlideShow(prev => prev + 1)
        }} ><img src='../src/assets/img/right.png'></img></button>
      </div>
    </div>
  )
}
