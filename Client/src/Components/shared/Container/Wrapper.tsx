import React, { FC } from 'react';
import { ContainerProps } from './types';
import { TError } from '../../../Shared';
import Loader from '../Loader';
import { Container, Grid } from '@mui/material';

const Wrapper: FC<ContainerProps> = ({ children, error, isError, isLoading }): JSX.Element => {

  if (isLoading) {
    return (
      <Wrapper>
        <Grid justifyContent='center'>
          <Loader />
        </Grid>
      </Wrapper>
    );
  }

  if (isError && error) {
    return <span>Error: {(error as TError).message}</span>;
  }

  return (
    <Container maxWidth='sm'>
      {children}
    </Container>
  );
};

export default Wrapper;