import React from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    const montshNames = months();

    return (
      <div style={userStyle}>
        {montshNames.map((month, index) => (
          <div
            className='month'
            style={{ backgroundColor: colorDensity(userCount(users, index)) }}
          >
            {month}
            <div className='users'>
              {users
                .filter(user => new Date(user.dob).getMonth() === index)
                .map(user => (
                  <p>{user.firstName + ' ' + user.lastName}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

const months = () => {
  let monthsArray = [];

  for (let i = 0; i < 12; i++) {
    monthsArray.push(new Date(0, i).toLocaleString('us', { month: 'long' }));
  }

  return monthsArray;
};

const colorDensity = num => {
  if (num > 10) {
    return 'red';
  } else if (num > 5) {
    return 'green';
  } else if (num > 1) {
    return 'navy';
  } else if (num >= 0) {
    return 'gray';
  }
};

const userCount = (users, index) =>
  users.filter(user => new Date(user.dob).getMonth() === index).length;

export default Users;
