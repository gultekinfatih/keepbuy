import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './tabs/mainStack';
import {AuthStack} from './stacks/authStack';

import {connect} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  const {app} = props;
  const {loginStatus} = app;
  return useMemo(
    () => (
      <NavigationContainer>
        {loginStatus ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    ),
    [loginStatus],
  );
});

export {Navigation};
