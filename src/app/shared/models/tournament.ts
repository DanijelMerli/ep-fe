import { Logo } from './logo';
import { Team } from './team';

export interface Tournament {
  id: number;
  title: string;
  description: string;
  logo: Logo;
  teams: Team[];
}
