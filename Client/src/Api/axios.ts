import { axiosInstance } from './config';
import { TASKS } from './paths';

export const getAllTasks = (): Promise<any> =>
  axiosInstance().get(TASKS.GET_ALL);

export const removeTask = (id: string): Promise<any> => axiosInstance().delete(TASKS.DELETE_TASK(id));
