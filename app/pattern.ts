import Tick from './tick';

export class Pattern {
  id: number;
  type: string;
  timestamp: number;
  ticks: Tick[];
}