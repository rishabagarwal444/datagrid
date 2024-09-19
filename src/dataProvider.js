import fakeRestProvider from 'ra-data-fakerest';
import data from './data/data.json';

const dataProvider = fakeRestProvider(data);
export default dataProvider;
