import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from '../../redux/modules/start';

const Start = props => (
  <div>
    <p>{props.count}</p>
    <button onClick={props.increment}>
      You have clicked me {props.count} time{props.count === 1 ? '' : 's'}.
    </button>
  </div>
);

const mapStateToProps = state => ({
  count: state.start.count,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Start);
