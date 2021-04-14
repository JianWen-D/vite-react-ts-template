import Type from '../actionTypes';


const initialState = {
  abc: '123'
};

const template = (state = initialState, action: any) => {
  switch (action.type) {
    case Type.TEMPLATE:
      return action.data;
    default:
      return state;
  }
}

export default template;