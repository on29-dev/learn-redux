import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

// useSelector : 상태를 조회하는 hook
// useDispatch : dispatch 함수 사용

function CounterContainer() {
  const { number, diff } = useSelector(state =>({
    number: state.counter.number,
    diff: state.counter.diff
  }))
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