import React, { FC } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import { ContainerProps } from './types';
import { TError } from '../../../shared';
import Loader from '../Loader';

const Container: FC<ContainerProps> = ({ children, error, isError, isLoading }): JSX.Element => {

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader/>
        </Flex>
      </Container>
    );
  }

  if (isError && error) {
    return <span>Error: {(error as TError).message}</span>;
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1024,
        mx: 'auto',
      }}
    >
      {children}
    </Box>
  );
};

export default Container;