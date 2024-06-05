import {TaskProps} from '../../pages/ExercisePage/ExercisePage';
// TODO export from upper layer

interface PageProps {
  errors: TaskProps[];
  errorCount: number;
}

export type RootStackParamList = {
  Home: undefined;
  Exercise: undefined;
  Test: PageProps;
  Line: PageProps;
  Compare: PageProps;
  Results: PageProps;
};
