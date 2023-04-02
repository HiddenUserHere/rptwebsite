import { GAME_SERVER_BASE_URL } from '../../../settings.jsx';

export const getSkillsListUrl = () => {
  return new URL('guide/skillslist.php', GAME_SERVER_BASE_URL).toString();
};
