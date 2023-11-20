import styled from '@emotion/styled';

export const Picture = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  height: calc(100vh - 88px);
  img {
    object-fit: cover;
  }
`;

export const TitleWrap = styled.div`
  position: absolute;
  bottom: 50px;
  left: 64px;
`;

export const Title = styled.h4`
  font-size: 1.25rem;
`;

export const Desc = styled.p`
  font-size: 2.1875rem;
`;
