import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Flex } from 'rebass/styled-components';

import Container from '../shared/Container';
import { getAllTasks } from '../../Api/axios';
import TaskItem from '../TaskItem';
import { TTask } from '../../shared';

const TasksList: FC = ():JSX.Element => {
  const { data, error, isLoading, isError } = useQuery('tasks', getAllTasks);

  return <Container error={error} isError={isError} isLoading={isLoading}>
    <Flex flexDirection='column' alignItems='center'>
      {data?.data?.map((el: TTask) => (
        <TaskItem key={el.id} {...el} />
      ))}
    </Flex>
  </Container>;
};

export default TasksList;