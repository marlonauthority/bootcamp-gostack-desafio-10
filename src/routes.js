import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
