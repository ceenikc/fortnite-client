import { plainToClass, Type } from 'class-transformer';
import { StatsItem } from './stats-item';

export class PlayerStats {
  @Type(() => StatsItem)
  public stats: StatsItem[];

  public static FROM_JSON(jsonObject: {}): PlayerStats {
    return plainToClass(PlayerStats, jsonObject);
  }
}

export interface IPlayerStats {
  stats: {}[];
}