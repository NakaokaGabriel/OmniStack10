import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  margin-left: 20px;
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  li {
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 20px;

    header {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
    }

    p {
      color: #666;
      font-size: 14px;
      line-height: 20px;
      margin: 10px 0;
    }

    a {
      color: #8e4dff;
      font-size: 14px;
      text-decoration: none;
    }
  }
`;

export const Info = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;
