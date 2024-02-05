import styled from '@emotion/styled';
import mediaQuery from '@/lib/styles/theme/mediaQuery';

export const Container = styled.main`
  padding-top: 100px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  ${mediaQuery.tablet} {
    gap: 10px;
  }
`;

export const TextContent = styled.div`
  padding-top: 84px;
  ${mediaQuery.tablet} {
    padding-top: 0;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const Title = styled.h4`
  padding-bottom: 10px;
  ${({ theme }) => theme.typography.size.title.t01}
`;

export const Desc = styled.h4`
  ${({ theme }) => theme.typography.size.subtitle.s01}
`;

export const PlayWrap = styled.div`
  display: grid;
  gap: 40px;
  padding-top: 50px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 60px;
  height: 30px;
  background: white;
  color: #000;
  border-radius: 20px;
`;

export const PlayContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PlayTitle = styled.p`
  ${({ theme }) => theme.typography.size.title.t03}
`;
