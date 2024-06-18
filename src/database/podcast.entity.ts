import { Type } from 'class-transformer';
import {
  IsInt,
  IsString,
  Max,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class Podcast {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  category: string;

  @IsInt()
  @Min(0)
  @Max(100)
  rating: number;

  @ValidateNested({ each: true })
  @Type(() => Episode)
  episodes: Episode[];
}

export class Episode {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  content: string;
}
