import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  width: 180px;
  margin-bottom: 60px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;

  background-color: #e6e6fa;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 30px;
`;
export const Indicator = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;

  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${({ isOnline }) => (isOnline ? `#ACF783` : `#F76A6A`)};
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
`;
