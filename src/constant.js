export const color = {
  primary: '#538D4E',
  secondary: '#B49F3C',
  darkgrey: '#3a3a3d',
  grey: '#818384',
  lightgrey: '#d7dadc',
  black: '#121214',
  white: '#fff'
};

export const ENTER = 'Enter';
export const CLEAR = '⌫';

export const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  [ENTER, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', CLEAR],
];

export const STATUS = {
  NORMAL: 1,
  TYPING: 2,
  GREEN: 3,
  YELLOW: 4,
  GRAY: 5
}

export const WORDS_LIST = [
  'HEART',
  'HELLO',
  'LOVES',
  'CRUSH',
  'REACT',
  'VUEJS',
]

export const DARK_THEME = {
  backgroundColor: color.black,
  color: color.white,
  surface: color.darkgrey,
  onSurface: color.lightgrey,
  primary: color.primary,
  secondary: color.secondary,
  grey: color.grey,
  white: color.white
}

export const LIGHT_THEME = {
  backgroundColor: color.white,
  color: color.black,
  surface: color.lightgrey,
  onSurface: color.darkgrey,
  primary: color.primary,
  secondary: color.secondary,
  grey: color.grey,
  white: color.white
}