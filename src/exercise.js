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
        text:action.text
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

// 스토어를 구독하기
const listener=_=>{
  const state = store.getState();
  console.log(state);
}
const unsubscribe = store.subscribe(listener);
// 구독 해지하기
// unsubscribe()

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({id:1, text:"와우"}));

// 브라우저 콘솔(window)에서 store로 호출해 사용 가능
window.store = store;
window.unsubscribe = unsubscribe;


// 리덕스와 리액트를 연동할 때 unsubscribe 함수나 getState를 직접 사용하는 일은 미들웨어 사용 전까지는 거의 없음
// 주로 connect useSelector useStore 등 헬퍼 Hooks를 사용하게 됨