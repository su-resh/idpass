import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomersList } from "./customers/CustomersList";
import { CustomersCreate } from "./customers/CustomersCreate";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersShow } from "./customers/CustomersShow";
import { RentalsList } from "./rentals/RentalsList";
import { RentalsCreate } from "./rentals/RentalsCreate";
import { RentalsEdit } from "./rentals/RentalsEdit";
import { RentalsShow } from "./rentals/RentalsShow";
import { CarsList } from "./cars/CarsList";
import { CarsCreate } from "./cars/CarsCreate";
import { CarsEdit } from "./cars/CarsEdit";
import { CarsShow } from "./cars/CarsShow";
import { LocationsList } from "./locations/LocationsList";
import { LocationsCreate } from "./locations/LocationsCreate";
import { LocationsEdit } from "./locations/LocationsEdit";
import { LocationsShow } from "./locations/LocationsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CarRentalService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customers"
          list={CustomersList}
          edit={CustomersEdit}
          create={CustomersCreate}
          show={CustomersShow}
        />
        <Resource
          name="Rentals"
          list={RentalsList}
          edit={RentalsEdit}
          create={RentalsCreate}
          show={RentalsShow}
        />
        <Resource
          name="Cars"
          list={CarsList}
          edit={CarsEdit}
          create={CarsCreate}
          show={CarsShow}
        />
        <Resource
          name="Locations"
          list={LocationsList}
          edit={LocationsEdit}
          create={LocationsCreate}
          show={LocationsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
