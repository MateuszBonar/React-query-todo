import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Box, Typography } from '@mui/material';

import { Container } from '../shared';
import { TTask } from '../../Shared';
import { createTask } from '../../Api/axios';
import TaskForm from '../shared/TaskForm/TaskForm';

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
        <Typography variant="h1" component="h2">
          Create New Task
        </Typography>;
        <TaskForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};

export default CreateTask;
