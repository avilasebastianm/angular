import {CountryInterface} from "./country.interface";
import {Region} from "./region.type";

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries


}

export interface RegionCountries {
  region: Region;
  countries: CountryInterface[];
}

export interface TermCountries {
  term: string;
  countries: CountryInterface[];
}
