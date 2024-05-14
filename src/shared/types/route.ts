type MaxNum = 10 | 20 | 30 | 40 | 100;
type Type = 'add' | 'subtrac' | 'all';
interface PageProps {
  maxNum: MaxNum;
  type: Type;
}

export type RootStackParamList = {
  Home: undefined;
  Exercise: PageProps;
  Test: PageProps;
  Line: PageProps;
  Compare: PageProps;
};
