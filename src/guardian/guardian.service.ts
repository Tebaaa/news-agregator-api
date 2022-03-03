import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class GuardianService {
  constructor(private httpService: HttpService) {}
  async guardianSearchByWord(wordToSearch: string) {
    const guardianApiKey = '6df96c84-1a3f-4b41-b9eb-22e4300af047';
    const guardianApiUrl = `https://content.guardianapis.com/search?q=${wordToSearch}&api-key=${guardianApiKey}`;
    const guardianApiData = await lastValueFrom(
      this.httpService
        .get(guardianApiUrl)
        ?.pipe(map((response) => response.data.response.results)),
    );
    return guardianApiData;
  }
}