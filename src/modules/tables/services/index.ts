import { CountryService } from './country.service';
import { TablesService } from './tables.service';

export const services = [TablesService, CountryService];

export * from './tables.service';
export * from './country.service';
