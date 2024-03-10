export interface IQuestionData {
  id: string;
  name: string;
  title: string;
  tegs: Array<string>;
  success: boolean;
  answersCount: string;
  length: number;
}

export interface IQuestionmainData {
  questions: IQuestionData;
  length: number;
  items: IQuestionData;
}
export interface IQuestionForwardData {
  data: IQuestionmainData;
}
export interface ISort {
  arr: IQuestionData;
}
