import React, { FC } from 'react';
import { TaskFormProps } from './types';
import { useForm } from 'react-hook-form';

import { Loader } from '../index';
import { Box, Button, Checkbox } from '@mui/material';
import { Label } from '@mui/icons-material';

const TaskForm: FC<TaskFormProps> = ({ defaultValues, onFormSubmit, isLoading }): JSX.Element => {

  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label>Title</Label>
        <input ref={register} id='title' name='title' type='text' />
      </Box>
      <Box sx={{ marginBottom: 3 }}>
        <Label> isFinished</Label>
        <Checkbox ref={register} size="small" id="isFinished" name='Is Task Finished'/>
      </Box>
      <Button variant="contained">
        {isLoading ? <Loader /> : 'Submit'}
      </Button>
    </form>
  );
};

export default TaskForm;