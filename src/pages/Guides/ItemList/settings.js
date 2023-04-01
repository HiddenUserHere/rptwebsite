import { GAME_SERVER_BASE_URL } from '../../../settings.jsx';

export const getItemListUrl = () => {
  return new URL('guide/itemlist.php', GAME_SERVER_BASE_URL).toString();
};
