/* Social Networks */

export const FACEBOOK_URL = 'https://facebook.com/regnumworldofficial';
export const INSTAGRAM_URL = 'https://instagram.com/regnumpristontale/';
export const YOUTUBE_URL = 'https://youtube.com/@RegnumWorld';
export const DISCORD_URL = 'https://discord.gg/R47RarCebp';

/* External URLs (related to game) */

export const GAME_SERVER_BASE_URL = 'https://user.regnum.world';

export const getUserPanelUrl = () => {
  return new URL('/userpanel', GAME_SERVER_BASE_URL).toString();
};
export const getRegisterUrl = () => {
  return new URL(
    '/userpanel?page=Login&action=CreateAccount',
    GAME_SERVER_BASE_URL,
  ).toString();
};

/* Game Download */

export const MEDIAFIRE_URL =
  'https://www.mediafire.com/file/mhcrdkvsqjpzka1/rPTClient2787.zip/file';
export const GOOGLE_DRIVE_URL =
  'https://drive.google.com/u/4/uc?id=1bBEFrnDYipnVLnwydGBFx_u4Jji1W12w&export=download';
