import {User} from './user';
import {GistFile} from './gist-file';
import {BaseGist} from './base-gist';

export class Gist extends BaseGist {
  files: Map<string, GistFile>;
  public: boolean;
  user: object;
  owner: User;
  truncated: boolean;
}
