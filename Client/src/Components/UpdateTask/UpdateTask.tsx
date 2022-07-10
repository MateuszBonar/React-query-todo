import { Container } from "../shared";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from 'react-router-dom';

import { PUBLIC_ROUTES, TTask } from '../../Shared';
import { getTaskById, updateTask } from '../../Api/axios';
import TaskForm from '../shared/TaskForm/TaskForm';
import { Box, Typography } from '@mui/material';

const UpdateBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  //@ts-ignore
  const { data, error, isLoading, isError } = useQuery(["tasks", { id }], getTaskById);
  const { mutateAsync, isLoading: isMutating } = useMutation(updateTask)

  const onFormSubmit = async (formData: TTask) => {
    id && await mutateAsync({...formData, id})
    id && navigate(PUBLIC_ROUTES.HOME)
  }

  return (
    <Container isLoading={isLoading} isError={isError} error={error}>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Typography variant="h5" component="h5">
          Update Task
        </Typography>;
        <TaskForm defaultValues={data as TTask} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
      </Box>
    </Container>
  );
};

export default UpdateBook;
