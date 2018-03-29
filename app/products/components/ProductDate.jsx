import React from 'react';
import PropTypes from 'prop-types';
import dateInterval from '../../utils/dateInterval'

const ProductDate = ({ date }) => (
  <span>{dateInterval({ dateStr: date })}</span>
);

ProductDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ProductDate;