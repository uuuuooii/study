import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 90px);
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0,
      hsla(0, 0%, 8%, 0.15) 36%,
      hsla(0, 0%, 8%, 0.35) 51%,
      hsla(0, 0%, 8%, 0.58) 63%,
      #141414 84%
    ),
    url('/images/visual/22_Instacart_Tee.jpg');
  background-position: 50%;
  background-size: cover;
`;

export const TitleWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 30px;
  bottom: 130px;
  left: 64px;
`;

export const Round = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.black};
`;

export const Title = styled.h4`
  background: linear-gradient(to right, #000, #fff);
  color: transparent;
  // 배경으로 텍스트가 채워지는 효과를 얻을 수 있음
  -webkit-background-clip: text;
  ${({ theme }) => theme.typography.size.title.t02}
`;

export const Desc = styled.p`
  ${({ theme }) => theme.typography.size.title.t01}
`;
