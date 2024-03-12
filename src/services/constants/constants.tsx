export interface IQuestionData {
  id: string;
  name: string;
  title: string;
  tegs: Array<string>;
  success: boolean;
  answersCount: string;
  length: number;
  answer_id: number;
  owner: IOwnerData;
  body: string;
}
export interface IOwnerData {
  profile_image: string;
  display_name: string;
  title: string;
  tegs: Array<string>;
  success: boolean;
  answersCount: string;
  length: number;
  answer_id: number;
  owner: {};
}

export interface IQuestionmainData {
  questions: IQuestionData;
  length: number;
  items: IQuestionData;
}
export interface IQuestionForwardData {
  data: IQuestionmainData;
}
export interface IAnswersForwardData {
  items: IQuestionData;
}
export interface ISort {
  arr: IQuestionData;
}
