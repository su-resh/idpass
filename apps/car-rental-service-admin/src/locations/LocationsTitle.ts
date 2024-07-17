import { Locations as TLocations } from "../api/locations/Locations";

export const LOCATIONS_TITLE_FIELD = "locationName";

export const LocationsTitle = (record: TLocations): string => {
  return record.locationName?.toString() || String(record.id);
};
