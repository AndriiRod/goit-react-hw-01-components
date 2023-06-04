import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  width: 362px;
  padding-top: 20px;
  background-color: #e6e6fa;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 60px;
`;

export const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;

  text-align: center;

  color: #b2b2b2;

  margin-bottom: 50px;
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 100px;
  background-color: ${({ color }) => color};
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
`;
