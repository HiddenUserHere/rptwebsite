import { GAME_SERVER_BASE_URL } from '../../settings.jsx';

export const getRankingUrl = () => {
  return new URL('guide/rankings.php', GAME_SERVER_BASE_URL).toString()
};