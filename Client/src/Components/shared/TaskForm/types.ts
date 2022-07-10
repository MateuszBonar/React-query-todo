import { TTask } from '../../../shared';

export type TaskFormProps = {
  defaultValues?: TTask;
  onFormSubmit: (values: TTask) => void;
  isLoading: boolean;
}