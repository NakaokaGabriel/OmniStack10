import styled from 'styled-components';

export const Container = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;

    > .input-block + .input-block {
      margin-top: 20px;
    }

    .input-group {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .input-block label {
      color: #acacac;
      font-size: 14px;
      font-weight: bold;
      display: block;
    }

    .input-block input {
      width: 100%;
      height: 32px;
      font-size: 14px;
      color: #666;
      border: none;
      border-bottom: 1px solid #eee;
    }
  }

  button {
    width: 100%;
    border: none;
    margin-top: 30px;
    background: #7d40e7;
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: background .5s;

    &:hover {
      background: #6931ca;
    }
  }
`;
