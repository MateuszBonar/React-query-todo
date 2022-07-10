import { TTask } from '../../../Shared';

export type TaskFormProps = {
  defaultValues?: TTask;
  onFormSubmit: (values: TTask) => void;
  isLoading: boolean;
}