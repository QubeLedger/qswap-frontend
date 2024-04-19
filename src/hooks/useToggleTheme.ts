import { createStore } from './store';

interface Theme {
  active: boolean;
  backgroundColor: string;
  headerColor: string;
  button: string;
  TextColor: string;
  FieldColor: string;
  FieldBg: string;
  OpenButtonBg: string;
  BorderField: string;
  modalBgColor: string;
  modalBorder: string;
  searchBg: string;
  searchBorder: string;
  inputBgColor: string;
  inputTextColor: string;
  connectModalContainer: string;
  walletBg: string;
  walletHover: string;
  navBlockBg: string;
  ModalHoverColor: string;
  ToField: string;
  SwapButton: string;
  modalHover: string
}

export const ThemeWhiteState: Theme = { 
    active: false, 
    backgroundColor: '#fff', 
    headerColor: '#ECEBEB' ,
    button: 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))',
    TextColor: 'black',
    FieldColor: '#1a1a1a',
    FieldBg: '#f9f9f9',
    OpenButtonBg: '#fff',
    BorderField: '1px solid #EEEEEE',
    modalBgColor: 'rgb(245,245,245)',
    modalBorder: '2px solid #dbdbdb',
    searchBg: '#FAFAFA',
    searchBorder: '1px solid #e5e5e5',
    inputTextColor: '#333',
    inputBgColor: '#ecebeb',
    connectModalContainer: '#F5F5F5',
    walletBg: '#D9D9D9',
    walletHover: '#ECECEC',
    navBlockBg: '#ECEBEB',
    ModalHoverColor: '#ECECEC',
    ToField: '#f9f9f9',
    SwapButton: "#fff",
    modalHover: '#ECECEC',
};

export const ThemeBlackState: Theme = { 
  active: true, 
  backgroundColor: '#161616', 
  headerColor: '#202020' ,
  button: 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))',
  TextColor: 'white',
  FieldColor: '#1a1a1a',
  FieldBg: 'transparent',
  OpenButtonBg: '#222',
  BorderField: '1px solid #2b2b2d',
  modalBgColor: '#282828',
  modalBorder: '2px solid #333',
  searchBg: '#222',
  searchBorder: '1px solid #444',
  inputTextColor: '#999',
  inputBgColor: '#323232',
  connectModalContainer: '#323232',
  walletBg: '#5F5F5F',
  walletHover: '#333333',
  navBlockBg: '#202020',
  ModalHoverColor: '#333333',
  ToField: '#1b1b1b',
  SwapButton: "#161616",
  modalHover: '#222',
};




export const [useToggleTheme] = createStore(ThemeWhiteState);