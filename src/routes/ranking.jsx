import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import '../haru/ranking.css';

export default function Ranking() {

    const filterResponse = async (promise) => {
        const response = await promise
            .then((response) => ({ ...response.data, status: response.status }))
            .catch((error) => {
                console.log(error);
                if (error.response) {
                    return { ...error.response.data, status: error.response.status };
                } else {
                    return { message: "Ocorreu um erro inesperado", status: 500 };
                }
            });
        return response;
    };

    const [list, setList] = useState({})
    const [error, setError] = useState(false);
    const [showList, setShowList] = useState(0)
    const [selectedClass, setSelectedClass] = useState(null);

    useEffect(() => {
        const getRanking = async () => {
            const response = await filterResponse(axios.get('http://localhost:3000/ranking'))
            if (response.status !== 200) {
                setError(true)
                return
            }

            const { ranking, monsterList } = response

            setList({ ranking, monsterList })
        }
        getRanking()

    }, [])

    {
        return (
            <div className="page-content-full ranking-page">
                <div className="page-content-header">
                    <div className="iconranking"><img src="../src/assets/img/icons/sword.svg"></img></div>
                    <h1>The featured players</h1>
                    <h2>see below the best players of regnum world</h2>
                    <div className="divider"><img src="../src/assets/img/news/ornament2.png"></img></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet explicabo soluta eius minima odit tempore, pariatur veniam quidem culpa neque deleniti ipsam ipsa iusto eligendi quam. Pariatur, tempore modi.</p>

                </div>
                <div className="page-content">
                    <div className="page-content-title">Ranking</div>

                    <div>
                        <button className={`button-toggle-ranking ${showList === 0 ? 'Select' : ''}`} onClick={() => setShowList(0)} >Ranking Level</button>
                        <button className={`button-toggle-ranking ${showList === 1 ? 'Select' : ''}`} onClick={() => setShowList(1)} >MonsterList</button>
                        {error ? (
                            <p>ERRO</p>
                        ) : Object.keys(list).length === 0 ? (
                            <p className='teste2'>{ }Nenhum dado do Ranking encontrado</p>
                        ) : (
                            <div className="ranking-content2">



                                {showList === 0 && list.ranking.slice(0, 50).map(({ CharLevel, CharName, CharClass }, index) => (
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

                                {showList === 1 && list.monsterList.slice(0, 50).map(({ Level, Name, Size }, index) => (
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
        )
    }
}