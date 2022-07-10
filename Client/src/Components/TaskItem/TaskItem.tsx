import { FC } from 'react';
import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import { Link as RouterLink } from 'react-router-dom'
import { useMutation, useQueryClient } from "react-query";
import { removeTask } from '../../Api/axios';
import { Loader } from '../shared';

const TaskItem: FC<{id: string; title: string; isFinished: boolean}> = ({id, title, isFinished }) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeTask)

  const remove = async () => {
    await mutateAsync(id)
    queryClient.invalidateQueries('tasks')
  }

  return (
    <Flex key={id} p={3} width="100%" alignItems="center">
      {/* @ts-ignore*/ }
      <StyledLink as={RouterLink} to={`/update-task/${id}`} mr="auto">{title}</StyledLink>
      <Text>{isFinished}</Text>
      <Button onClick={remove} ml="5">
         @ts-ignore
        { isLoading ? <Loader/> : "Remove" }
      </Button>
    </Flex>
  );
};

export default TaskItem;
