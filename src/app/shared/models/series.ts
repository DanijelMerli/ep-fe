import { League } from './league';
import { Tournament } from './tournament';

export interface Series {
  id: number;
  full_name: string;
  name: string;
  league: League;
  tournaments: Tournament[];
}
