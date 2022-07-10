import { axiosInstance } from './config';
import { TASKS } from './paths';
import { TTask } from '../Shared';

export const getAllTasks = (): Promise<any> =>
  axiosInstance().get(TASKS.GET_ALL);
export const getTaskById = (id: string): Promise<TTask[]> => axiosInstance().get(TASKS.GET_TASK(id));
export const removeTask = (id: string): Promise<TTask[]> => axiosInstance().delete(TASKS.DELETE_TASK(id));
export const createTask = (task: TTask): Promise<TTask[]> => axiosInstance().post(TASKS.CREATE_TASK, task);
export const updateTask = (task: TTask): Promise<TTask[]> => axiosInstance().put(TASKS.UPDATE_TASK(task.id), task);