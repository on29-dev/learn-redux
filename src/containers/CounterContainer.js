import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

// useSelector : 상태를 조회하는 hook
// useDispatch : dispatch 함수 사용

function CounterContainer() {
  const { number, diff } = useSelector(state =>({
    number: state.counter.number,
    diff: state.counter.diff
  }),
  // (left, right)=>{
  //   // 만약 단일 값이었다면 이렇게 해도 된다.
  //   // return left === right
  //   // 하지만 객체라면 내부값들을 모두 서술해줘야 함
  //   // return left.diff === right.diff && left.number === right.number
  // }
    // shallowEqual을 사용하면 보다 쉽게 서술 가능
    shallowEqual
    // 주의점: shallowEqual는 얕은 비교이기 때문에 비교를 엄격하게 보장하지 않음(left.diff === right.diff && left.number === right.number 를 쉽게 쓰기 위한 방법일 뿐)
    // 만약 number 값이 객체였다면 number 내부에 다른 값의 쌍(k,v)이 있어도 같다고 표시했을 것.
  )

  const dispatch = useDispatch();

  const onIncrease =_=> dispatch(increase());
  const onDecrease =_=> dispatch(decrease());
  const onSetDiff =diff=> dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;