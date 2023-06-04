import styled from '@emotion/styled';

export const UserCard = styled.div`
  position: relative;
  width: 362px;
  border-radius: 20px;
  padding: 30px 20px;
  margin-bottom: 60px;

  background-color: #f55252;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Img = styled.img`
  width: 49px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ffffff;
`;

export const BaseInfo = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 30px;
`;

export const Teg = styled.p`
  position: absolute;
  top: 22px;
  right: 21px;

  font-size: 12px;
  line-height: 1.2;

  color: #f7f683;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 1.2;
  font-weight: 600;
  color: #ffffff;
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 15px;
  line-height: 1.2;

  color: #ffffff;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const Indicators = styled.span`
  font-size: 15px;
  line-height: 1.2;

  color: #f7f683;
`;
