import React from 'react';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

// useSelector : 상태를 조회하는 hook
// useDispatch : dispatch 함수 사용

function CounterContainer({number, diff, increase, decrease, setDiff}) {

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

const mapStateToProps = state => ({
  number: state.counter.number,
  diff: state.counter.diff,
})

// const mapDispatchToProps = dispatch => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: diff => dispatch(setDiff(diff))
// })

// 아래 코드는 위 주석과 같음(bindActionCreators를 활용해 간편하게 한 것)
// 다만 onIncrease는 increase 등으로 바꿔야 함
// const mapDispatchToProps = dispatch => bindActionCreators({
//   increase,
//   decrease,
//   setDiff
// }, dispatch);

// mapDispatchToProps를 더 간편하게 하는 방법
// mapDispatchToProps를 객체형으로 주면 connect가 자동으로 bincActionCreators 작업을 수행
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff
}

// const enhance = connect(mapStateToProps, mapDispatchToProps);
// export default enhance(CounterContainer);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);