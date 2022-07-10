import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Link as StyledLink,
} from 'rebass/styled-components';

import Container from '../shared/Container';

const Navigation: FC = (): JSX.Element => {
  return <Flex bg='black' color='white' justifyContent='center'>
    <Container>
      <Flex px={2} width='100%' alignItems='center'>
        {/*@ts-ignore*/}
        <StyledLink as={RouterLink} variant='nav' to='/'>
          ToDoApp
        </StyledLink>
        <Box mx='auto' />
        {/*@ts-ignore*/}
        <StyledLink as={RouterLink} variant='nav' to='/create-task'>
          + Add new book
        </StyledLink>
      </Flex>
    </Container>
  </Flex>;
};

export default Navigation;