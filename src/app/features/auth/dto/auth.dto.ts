import {UserDto} from '../../users/dto/user.dto';

export interface AuthDto {
  user: UserDto;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAtTimestamp: string;
}
