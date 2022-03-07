import React, { useState } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

const App = props => {

  const [ businesses, setBusinesses ] = useState([]);
  const [ error, setError ] = useState();
  const [ loading, setLoading ] = useState(false);

  const searchYelp = async (term, location, sortBy) => {
    try {
      setLoading(true);
      setError();
      setBusinesses([]);
      const data = await Yelp.search(term, location, sortBy);
      if (!data.error) {
        setBusinesses(data)
      } else {
        setError(data.error)
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} error={error} loading={loading} />
    </div>
  )
}

export default App;