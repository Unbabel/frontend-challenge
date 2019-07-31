export const RULES = {
  MAX_WIDTH: 738,
  GUTTER: 24,
};

export const COLORS = {
  HEADER_BG: 'FFFFFF',
  MAIN_BG: 'F6F7F8',
  TITLE: '414C5E',
  TRANSCRIPTION_TITLE: '566074',
  TRANSCRIPTION_BODY: '778195',
  BLUE: '34A5FF',
  PURPLE: '859EFF',
  GREY_LIGHTER: 'EAEDEF',
  GREY_LIGHT: 'D0D4DA',
  GREY_DARK: '8F97A8',
};

export const SHADOWBOX = {
  HEADER: '0 1px 2px 0 rgba(0,0,0,0.24), 0 1px 3px 0 rgba(0,0,0,0.12)',
};

const theme = {
  primaryFont: 'Open Sans, sans-serif',
  secondaryFont: 'Montserrat, sans-serif',
  maxWidthRule: `${RULES.MAX_WIDTH / 16}rem`,
  gutterRule: `${RULES.GUTTER / 16}rem`,
  headerBgColor: `#${COLORS.HEADER_BG}`,
  mainBgColor: `#${COLORS.MAIN_BG}`,
  titleColor: `#${COLORS.TITLE}`,
  transcriptionTitleColor: `#${COLORS.TRANSCRIPTION_TITLE}`,
  transcriptionBodyColor: `#${COLORS.TRANSCRIPTION_BODY}`,
  blue: `#${COLORS.BLUE}`,
  purple: `#${COLORS.PURPLE}`,
  greyLighter: `#${COLORS.GREY_LIGHTER}`,
  greyLight: `#${COLORS.GREY_LIGHT}`,
  greyDark: `#${COLORS.GREY_DARK}`,
  boxShadow: `${SHADOWBOX.HEADER}`,
};

export default theme;
