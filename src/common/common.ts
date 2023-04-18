export interface Post {
  createdAt: string;
  title: string;
  image: string;
  content: string;
  like: number;
  comments: any[];
  dislike: number;
  id: string;
}
