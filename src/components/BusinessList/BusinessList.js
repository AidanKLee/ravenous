import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import Loader from '../Loader/Loader';

const BusinessList = props => {

    const { businesses, error, loading } = props;

    return (
        <div className="BusinessList">
            {
                loading ? <Loader /> : undefined
            }
            {
                businesses.length > 0 ? businesses.map((business, i) => <Business key={business.id} business={business}/>) : undefined
            }
            {
                error ? <h2>{`No Results, field ${error.field} ${error.description}.`}</h2> : undefined
            }
        </div>
    )
}

export default BusinessList;