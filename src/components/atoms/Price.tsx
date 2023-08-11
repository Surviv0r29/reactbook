import React from 'react';

interface PriceProps {
  value: number;
}

const Price: React.FC<PriceProps> = ({ value }) => <p className="price" >${value}</p>;

export default Price;