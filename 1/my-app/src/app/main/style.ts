import styled from '@emotion/styled';

export const VisualSection = styled.section`
  padding-top: 88px;
`;

export const Title = styled.p`
  padding-bottom: 20px;
  ${({ theme }) => theme.typography.size.title.t01}
`;
