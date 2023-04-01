/* Social Networks */

export const FACEBOOK_URL = 'https://facebook.com/regnumworldofficial';
export const INSTAGRAM_URL = 'https://instagram.com/regnumpristontale/';
export const YOUTUBE_URL = 'https://youtube.com/@RegnumWorld';
export const DISCORD_URL = 'https://discord.gg/R47RarCebp';

/* External URLs (related to game) */

export const GAME_SERVER_BASE_URL = 'https://user.regnum.world';

export const getRankingUrl = () => {
  return new URL('guide/rankings.php', GAME_SERVER_BASE_URL).toString();
}
