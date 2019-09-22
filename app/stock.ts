import Tick from './tick'
import Pattern from './pattern'

export class Stock {
  id: string;
  ticks: Tick[];
  patterns: Pattern[];
}