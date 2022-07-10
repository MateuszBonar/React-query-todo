import { Container } from "../shared";
import { useQuery, useMutation } from "react-query";
import { Box, Heading, Flex } from "rebass/styled-components";
import { useParams, useNavigate } from 'react-router-dom';
import { TTask } from '../../shared';
import { getTaskById, updateTask } from '../../Api/axios';
import TaskForm from '../shared/TaskForm/TaskForm';
import { PUBLIC_ROUTES } from '../../Constants';

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
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <TaskForm defaultValues={data as TTask} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
      </Box>
    </Container>
  );
};

export default UpdateBook;
