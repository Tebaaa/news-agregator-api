import { IsString } from 'class-validator';
export class SaveNewDto {
  @IsString()
  readonly url_new: string;
}
