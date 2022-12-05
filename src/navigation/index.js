import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './tabs/mainStack';
import {connect} from 'react-redux';
import {AuthStack} from './stacks/authStack';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  console.log('LOGIN STATUS', props.app.loginStatus);
  return useMemo(
    () => (
      <NavigationContainer>
        {props.app.loginStatus ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    ),
    [props.app.loginStatus],
  );
});

export {Navigation};
