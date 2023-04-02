import { GAME_SERVER_BASE_URL } from '../../settings.jsx';

export const getMixingListUrl = () => {
  return new URL('guide/mixlist.php', GAME_SERVER_BASE_URL).toString();
};
