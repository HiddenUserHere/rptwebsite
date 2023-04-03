import React from 'react';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';
import { experienceTable } from './settings.js';
import './styles.css';

const ExperienceTable = () => {
  return (
    <SimpleGuide
      pageTitle="Experience Table"
      pageDescription={
        <div>
          Experience Table section is a valuable resource for players looking to
          level up their characters in our game. It provides a comprehensive
          overview of all the experience points needed to reach each level in
          the game, allowing players to plan their progression and set goals for
          their characters. Whether you&apos;re a casual player or a hardcore
          gamer, our Experience Table section is an essential tool for
          understanding the leveling system in our game and achieving your full
          potential as a hero in our game.
        </div>
      }
      guideTitle="Experience Table"
      guideContent={
        <div className="exp-table-content">
          <div className="exp-table">
            <table>
              <thead>
                <tr>
                  <td className="cell">Level</td>
                  <td className="cell">Total EXP Required</td>
                  <td className="cell">EXP Required Level Up</td>
                </tr>
              </thead>
              <tbody>
                {experienceTable
                  .slice(0, 130)
                  .map(([totalExp, nextLevel], index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{totalExp.toLocaleString('en-US')}</td>
                        <td>{nextLevel.toLocaleString('en-US')}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      }
    />
  );
};

export default ExperienceTable;
