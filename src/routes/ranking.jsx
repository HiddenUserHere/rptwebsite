import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../haru/ranking.css';

export default function Ranking() {
  const filterResponse = async (promise) => {
    const response = await promise
      .then((response) => ({...response.data, status: response.status}))
      .catch((error) => {
        console.log(error);
        if (error.response) {
          return {...error.response.data, status: error.response.status};
        } else {
          return {message: 'Ocorreu um erro inesperado', status: 500};
        }
      });
    return response;
  };

  const [list, setList] = useState({});
  const [error, setError] = useState(false);
  const [showList, setShowList] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    const getRanking = async () => {
      const response = await filterResponse(axios.get('http://localhost:3000/ranking'));
      if (response.status !== 200) {
        setError(true);
        return;
      }

      const {ranking, monsterList} = response;

      setList({ranking, monsterList});
    };
    getRanking();

  }, []);

  {
    return (
      <div className="page-content-full ranking-page">
        <div className="page-content-header">
          <div className="iconranking">
            <img src="../src/assets/img/icons/sword.svg" alt="sword"></img>
          </div>
          <h1>The featured players</h1>
          <h2>see below the best players of regnum world</h2>
          <div className="divider">
            <img src="../src/assets/img/news/ornament2.png"></img>
          </div>
          <p>
            The player ranking is a leaderboard of the best players in our game. It's regularly updated based on
            experience points accumulated by each player, as well as other criteria like levels achieved and
            achievements unlocked. The ranking is a fun and competitive way to see how you stack up against other
            players, and it can also help you find new challenges to overcome. Who knows, you may even climb the
            ranking and become the top player in our game!
          </p>
        </div>
        <div className="page-content">
          <div className="page-content-title">Ranking</div>

          <div>
            <button className={`button-toggle-ranking ${showList === 0 ? 'Select' : ''}`}
                    onClick={() => setShowList(0)}>Ranking Level
            </button>
            {error ? (
              <p>ERRO</p>
            ) : Object.keys(list).length === 0 ? (
              <p className="teste2">{}Nenhum dado do Ranking encontrado</p>
            ) : (
              <div className="ranking-content2">


                {showList === 0 && list.ranking.slice(0, 50).map(({CharLevel, CharName, CharClass}, index) => (
                  <div key={`ranking${index}`}>

                    <tr>
                      <td>{CharName}</td>
                      <td>{CharLevel}</td>
                      <td>{CharClass}</td>
                      <td>{CharName}</td>
                      <td>{CharLevel}</td>
                      <td>{CharClass}</td>
                    </tr>
                  </div>
                ))}

                {showList === 1 && list.monsterList.slice(0, 50).map(({Level, Name, Size}, index) => (
                  <div key={`monster-list${index}`}>
                    <tr>
                      <td>{Name}</td>
                      <td>{Level}</td>
                      <td>{Size}</td>
                    </tr>
                  </div>
                ))}


              </div>
            )}
          </div>

        </div>
        <div className="space"></div>
      </div>
    );
  }
}