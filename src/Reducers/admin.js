import pix from '../assets/Michael.jpg';

const initState = {
  status: true,
  id: 5,
  name: 'Michael Oladipupo',
  pix
};

const admin = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default admin;
