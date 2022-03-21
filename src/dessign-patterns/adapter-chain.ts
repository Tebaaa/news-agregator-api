import { IGNew } from 'src/g-news/interfaces/gNew.interface';
import { IGuardianNew } from 'src/guardian/interfaces/guardianNew.interface';
import { INew } from 'src/news/interfaces/news.interface';
import { INYTNew } from 'src/nyt/interfaces/nytNew.interface';
import { GNewToGenericNew } from './adapters/g-new-adapter';
import { GuardianNewToGenericNew } from './adapters/guardian-adapter';
import { NYTNewToGenericNew } from './adapters/nyt-adapter';

export function adaptersChain(
  newToAdapt: IGuardianNew | INYTNew | IGNew,
): INew {
  const isGuardian = (newToAdapt): newToAdapt is IGuardianNew => {
    return (newToAdapt as IGuardianNew).webUrl !== undefined;
  };
  const isNYT = (newToAdapt): newToAdapt is INYTNew => {
    return (newToAdapt as INYTNew).web_url !== undefined;
  };
  if (isNYT(newToAdapt)) {
    return new NYTNewToGenericNew(newToAdapt);
  }
  if (isGuardian(newToAdapt)) {
    return new GuardianNewToGenericNew(newToAdapt);
  }
  return new GNewToGenericNew(newToAdapt);
}
