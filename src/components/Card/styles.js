import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 322px;
  height: 498px;
  border-radius: 20px;
  background-color: var(--white-color);
  box-shadow: 0px 5px 27px -11px rgba(171, 178, 187, 0.90);
  padding: 20px 0;
  gap: 32px;

  .text {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    gap:20px;
    h3,
    p {
      text-align: center;
    }

    h3 {
      font-weight: 700;
      color: var(--dark-blue-color);
      font-size: 22px;
    }
  }

  figure {
    border-radius: 14px;
    margin: 0 auto;
    width: 287px;
    height: 287px;
    overflow: hidden;
      img {
      width: 100%;
    }
  }
`;