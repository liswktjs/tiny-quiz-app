export interface QuizItemType {
  id: string;
  quiz: string;
  selector: {
    id: number;
    content: string;
  }[];
  answerId: number;
}
