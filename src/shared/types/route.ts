interface resultsProps {
  errors: string[];
  errorCount: number;
}

export type RootStackParamList = {
  Home: undefined;
  Exercise: undefined;
  Test: undefined;
  Line: undefined;
  Compare: undefined;
  Results: resultsProps;
};
