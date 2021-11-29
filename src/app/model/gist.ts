import {User} from './user';
import {GistFile} from './gist-file';

export class Gist {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: Map<string, GistFile>;
  public: boolean;
  created_at: Date;
  updated_at: Date;
  description: string;
  comments: number;
  user: object;
  comments_url: string;
  owner: User;
  truncated: boolean;
}
