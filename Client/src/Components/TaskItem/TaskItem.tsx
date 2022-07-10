import { FC } from 'react';
import { Flex, Text, Button, Link as StyledLink } from 'rebass/styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removeTask } from '../../Api/axios';
import { Loader } from '../shared';
import { TTask } from '../../shared';

const TaskItem: FC<TTask> = ({ id, title, isFinished }) => {
  const queryClient = useQueryClient();
  const { mutate: addTask, isLoading } = useMutation(removeTask, {
    onMutate: async (id) => {
      await queryClient.cancelQueries('tasks');
      const previousTasksData = queryClient.getQueryData('tasks');
      queryClient.setQueryData('tasks', (oldQueryData: any) => {
        return {
          ...oldQueryData,
          data: (oldQueryData.data as TTask[]).filter(task => task.id !== id),
        }
      });
      return { previousTasksData };
    },
    onError: (_err, _newTodo, context) => {
      //@ts-ignore
      queryClient.setQueryData('tasks', context?.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('tasks');
    },
  });

  const remove = (): void => {
    addTask(id);
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
