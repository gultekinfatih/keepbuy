import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './tabs/mainStack';
import {AuthStack} from './stacks/authStack';

import {connect} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
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
