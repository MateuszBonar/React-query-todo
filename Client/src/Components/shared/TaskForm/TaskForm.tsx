import React, { FC } from 'react';
import { TaskFormProps } from './types';
import { useForm } from 'react-hook-form';
import { Box, Button } from "rebass/styled-components";
import { Loader } from '../index';

const TaskForm: FC<TaskFormProps> = ({ defaultValues, onFormSubmit, isLoading }): JSX.Element => {

  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <label>Title</label>
        <input ref={register} id='title' name='title' type='text' />
      </Box>
      <Box sx={{ marginBottom: 3 }}>
        <label> isFinished</label>
        <switch ref={register} id='isFinished' name='isFinished' type='text' />
      </Box>
      <Button variant='primary' mr={2}>
        {isLoading ? <Loader /> : 'Submit'}
      </Button>
    </form>
  );
};

export default TaskForm;