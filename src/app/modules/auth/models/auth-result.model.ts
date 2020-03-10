import { LoggedInUser } from '../../shared/models/logged-in-user.model';

export class AuthResult {
  token: string;
  user: LoggedInUser;
}
