import { IsUrl } from 'class-validator';
export class SaveNewDto {
  @IsUrl()
  readonly url_new: string;
}
