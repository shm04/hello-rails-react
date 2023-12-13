import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../redux/actions';

const Greeting = ({ greeting, error, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div>
      <h1>Greeting Component</h1>
      {error && <p>Error: {error}</p>}
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
  error: state.error,
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);