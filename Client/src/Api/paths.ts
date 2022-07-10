export const TASKS = {
  GET_ALL: '/tasks',
  GET_TASK: (id: string) => `/tasks/${id}`,
  DELETE_TASK: (id: string) => `/tasks/${id}`,
  CREATE_TASK: '/tasks',
  UPDATE_TASK: (id: string) => `/tasks/${id}`,
}