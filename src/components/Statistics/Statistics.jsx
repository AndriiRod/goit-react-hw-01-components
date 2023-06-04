import PropTypes from 'prop-types';

import {
  StatisticsCard,
  SubTitle,
  StatisticsList,
  Item,
  Label,
  Text,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <SubTitle>{title}</SubTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage, color }) => {
          return (
            <Item key={id} color={color}>
              <Label>{label}</Label>
              <Text>{percentage}%</Text>
            </Item>
          );
        })}
      </StatisticsList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
