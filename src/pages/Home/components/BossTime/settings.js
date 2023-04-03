import { GAME_SERVER_BASE_URL } from '../../../../settings.jsx';

export const getBossTimeUrl = () => {
  return new URL('guide/bosstime.php', GAME_SERVER_BASE_URL).toString();
};
