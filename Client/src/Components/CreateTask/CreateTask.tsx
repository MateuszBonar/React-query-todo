import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Box, Heading } from 'rebass/styled-components';

import { Container } from '../shared';
import { TTask } from '../../Shared';
import { createTask } from '../../Api/axios';
import TaskForm from '../shared/TaskForm/TaskForm';
import { FC } from 'react';

const CreateTask: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(createTask);

  const onFormSubmit = async (data: TTask) => {
    await mutateAsync({ ...data });
    navigate('/');
  };
  return (
    <Container>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Create New Task</Heading>
        <TaskForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};

export default CreateTask;
