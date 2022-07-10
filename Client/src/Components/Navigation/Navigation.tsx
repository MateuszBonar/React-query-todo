import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../shared/Container';
import { PUBLIC_ROUTES } from '../../Shared';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navigation: FC = (): JSX.Element => {
  const [value, setValue] = useState('/');

  return <Wrapper>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Link to={PUBLIC_ROUTES.HOME}>
        <BottomNavigationAction label='home' icon={<RestoreIcon />} />
      </Link>
      <Link to={PUBLIC_ROUTES.CREATE_TASK}>
        <BottomNavigationAction label='create' icon={<FavoriteIcon />} />
      </Link>
    </BottomNavigation>
  </Wrapper>;
};

export default Navigation;