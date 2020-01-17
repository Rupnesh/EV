import { ShellModel } from '../../shell/data-store';

export class SearchNearByListingItemModel extends ShellModel {
  avatar: string;
  stationName: string;
  status: number; // timestamp
  contact: string;

  constructor() {
    super();
  }
}