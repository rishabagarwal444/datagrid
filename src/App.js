
import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, DateField, BooleanField, TextInput, Filter } from 'react-admin';
import dataProvider from './dataProvider';

// Create a filter component for the list
const CustomerFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search by Customer" source="customer" alwaysOn />
    <TextInput label="Segment" source="segments" />
  </Filter>
);

// Create a list component to display the data grid
const CustomerList = () => (
  <List filters={<CustomerFilter />} sort={{ field: 'customer', order: 'ASC' }}>
    <Datagrid>
      <TextField source="customer" label="Customer" />
      <DateField source="lastSeen" label="Last Seen" />
      <TextField source="orders" label="Orders" />
      <TextField source="totalSpent" label="Total Spent" />
      <TextField source="latestPurchase" label="Latest Purchase" />
      <BooleanField source="news" label="News" />
      <TextField source="segments" label="Segments" />
    </Datagrid>
  </List>
);

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="customers" list={CustomerList} />
    </Admin>
  );
}

export default App;
