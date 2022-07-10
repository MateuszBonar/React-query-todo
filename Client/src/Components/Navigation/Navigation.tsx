import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Link as StyledLink,
} from 'rebass/styled-components';

import Container from '../shared/Container';
import { PUBLIC_ROUTES } from '../../Constants';

const Navigation: FC = (): JSX.Element => {
  return <Flex bg='black' color='white' justifyContent='center'>
    <Container>
      <Flex px={2} width='100%' alignItems='center'>
        {/*@ts-ignore*/}
        <StyledLink as={RouterLink} variant='nav' to={PUBLIC_ROUTES.HOME}>
          ToDoApp
        </StyledLink>
        <Box mx='auto' />
        {/*@ts-ignore*/}
        <StyledLink as={RouterLink} variant='nav' to='/create-task'>
          + Add new task
        </StyledLink>
      </Flex>
    </Container>
  </Flex>;
};

export default Navigation;