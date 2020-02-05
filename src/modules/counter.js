// 액션타입선언시 다른 모듈과 이름이 중복되지 않기 위해 counter/라는 접두사를 붙임
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = diff => ({type: INCREASE});
export const decrease = diff => ({type: DECREASE});

// 초기 상태 설정
const initialState = {
  number: 0,
  diff: 1
};

// reducer 만듦
export default function counter(state=initialState, action){
  switch(action.type){
    case SET_DIFF:
      return {
        ...state,
        diff:action.diff,
      }
    case INCREASE:
      return{
        ...state,
        number:state.number + state.diff
      }
    case DECREASE:
      return{
        ...state,
        number:state.number - state.diff
      }
    default:
      return state;
  }
}
