import React, { FC } from 'react';
import { useQuery } from 'react-query';

import Wrapper from '../shared/Container';
import { getAllTasks } from '../../Api/axios';
import TaskItem from '../TaskItem';
import { TError, TTask } from '../../Shared';
import { Grid } from '@mui/material';

const TasksList: FC = ():JSX.Element => {
  const { data, error, isLoading, isError } = useQuery<TTask[], TError>('tasks', getAllTasks);

  return <Wrapper error={error} isError={isError} isLoading={isLoading}>
    <Grid flexDirection='column' alignItems='center'>
      {data?.map((el: TTask) => (
        <TaskItem key={el.id} {...el} />
      ))}
    </Grid>
  </Wrapper>;
};

export default TasksList;