import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removeTask, updateTask } from '../../Api/axios';
import { Loader } from '../shared';
import { TTask } from '../../Shared';
import { Button, Checkbox, Grid } from '@mui/material';


const TaskItem: FC<TTask> = ({ id, title, isFinished }) => {
  const queryClient = useQueryClient();
  const refetchData = (): void => {
    queryClient.invalidateQueries('tasks');
  };

  const { mutate: removeCurrentTask, isLoading: isLoadingRemove } = useMutation(removeTask, {
    onSuccess: refetchData,
  });
  const { mutateAsync, isLoading: isLoadingUpdate } = useMutation(updateTask, {
    onSuccess: refetchData,
  });

  const isLoading = isLoadingRemove || isLoadingUpdate;

  const remove = async (): Promise<void> => {
    await removeCurrentTask(id);
    queryClient.invalidateQueries('tasks');
  };

  const onCheckboxChange = async (e: any): Promise<void> => {
    await mutateAsync({ id, title, isFinished: e.target.checked });
    queryClient.invalidateQueries('tasks');
  };

  return (
    <Grid key={id} p={3} width='100%' alignItems='center'>
      <Checkbox
        disabled={isLoading}
        checked={isFinished}
        onChange={onCheckboxChange}
      />
      <Link to={`/update-task/${id}`}>{title}</Link>
      <Button onClick={remove}>
        {isLoading ? <Loader /> : 'Remove'}
      </Button>
    </Grid>
  );
};

export default TaskItem;
