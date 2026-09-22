import { PostSummary } from '../../api/postsApi';

export interface PostRowProps {
  post: PostSummary;
  onClick: () => void;
}
