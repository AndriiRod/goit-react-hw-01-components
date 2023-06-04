import PropTypes from 'prop-types';

import { Table, Name, Title, Text } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Name>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </Name>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Name key={id}>
              <Text>{type}</Text>
              <Text>{amount}</Text>
              <Text>{currency}</Text>
            </Name>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
