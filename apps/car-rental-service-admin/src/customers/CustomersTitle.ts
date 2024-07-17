import { Customers as TCustomers } from "../api/customers/Customers";

export const CUSTOMERS_TITLE_FIELD = "lastName";

export const CustomersTitle = (record: TCustomers): string => {
  return record.lastName?.toString() || String(record.id);
};
