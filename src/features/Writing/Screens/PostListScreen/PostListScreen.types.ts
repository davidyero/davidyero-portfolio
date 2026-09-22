import { PostKind } from '../../api/postsApi';

export interface PostListScreenProps {
  /** Blog o build-in-public: la pantalla es la misma, cambian datos y textos. */
  kind: PostKind;
}
