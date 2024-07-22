interface resultsProps {
  errors: string[];
  errorCount: number;
}

export type RootStackParamList = {
  Home: undefined;
  Exercise: undefined;
  Test: undefined;
  Pair: undefined;
  Compare: undefined;
  Results: resultsProps;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
