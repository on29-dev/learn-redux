import {createStore} from 'redux';

const initialState = {
  counter: 0,
  text:'',
  list:[]
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase=_=>({type: INCREASE});
const decrease=_=>({type: DECREASE});
const changeText=text=>({type: CHANGE_TEXT, text});
const addToList=item=>({type:ADD_TO_LIST, item});

// state 초기값이 주어지지 않으면 state가 undefined로 뜨면서 
// 초기상태가 만들어지지 않는다.
function reducer(state = initialState, action){
  switch(action.type){
    case INCREASE:
      return {
        ...state,
        counter:state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter:state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        test:action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());