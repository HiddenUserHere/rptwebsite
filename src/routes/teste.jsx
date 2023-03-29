import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [ranking, setRanking] = useState([]);
  const [monsterList, setMonsterList] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRanking = async () => {
      const response = await axios.get('/ranking');
      setRanking(response.data.ranking);
      setMonsterList(response.data.monsterList);
    };

    fetchRanking();
  }, []);

  const filteredRanking = ranking.filter((char) => {
    return selectedClasses.length === 0 || selectedClasses.includes(char.CharClass);
  });

  const sortedRanking = filteredRanking.sort((a, b) => b.CharLevel - a.CharLevel);

  const totalPages = Math.ceil(sortedRanking.length / 10);

  const paginatedRanking = sortedRanking.slice((currentPage - 1) * 10, currentPage * 10);

  const handleClassFilterChange = (event) => {
    const classId = parseInt(event.target.value);
    if (selectedClasses.includes(classId)) {
      setSelectedClasses(selectedClasses.filter((id) => id !== classId));
    } else {
      setSelectedClasses([...selectedClasses, classId]);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Ranking</h1>
      <div>
        <label htmlFor="classFilter">Filtrar por classe:</label>
        <select id="classFilter" multiple value={selectedClasses} onChange={handleClassFilterChange}>
          <option value="1">Guerreiro</option>
          <option value="2">Mago</option>
          <option value="3">Arqueiro</option>
          <option value="4">Cavaleiro</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nível</th>
            <th>Classe</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRanking.map((char) => (
            <tr key={char.id}>
              <td>{char.CharName}</td>
              <td>{char.CharLevel}</td>
              <td>{char.CharClass}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
