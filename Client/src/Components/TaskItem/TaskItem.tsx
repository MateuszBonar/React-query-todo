import { FC } from 'react';
import { Flex, Text, Button, Link as StyledLink } from 'rebass/styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removeTask } from '../../Api/axios';
import { Loader } from '../shared';
import { TTask } from '../../Shared';

const TaskItem: FC<TTask> = ({ id, title, isFinished }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(removeTask);

  const remove = async (): Promise<void> => {
    await mutate(id);
    queryClient.invalidateQueries('tasks');
  };

  return (
    <Flex key={id} p={3} width='100%' alignItems='center'>
      {/* @ts-ignore*/}
      <StyledLink as={RouterLink} to={`/update-task/${id}`} mr='auto'>{title}</StyledLink>
      <Text>{isFinished}</Text>
      <Button onClick={remove} ml='5'>
        {isLoading ? <Loader /> : 'Remove'}
      </Button>
    </Flex>
  );
};

export default TaskItem;
