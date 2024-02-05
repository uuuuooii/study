import styled from '@emotion/styled';

export const Figure = styled.figure`
  position: relative;
  display: grid;
  gap: 20px;
`;

export const ImageWrap = styled.picture`
  position: relative;

  img {
    border-radius: 5px;
  }
  :hover {
    filter: brightness(70%);
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  svg {
    width: 48px;
    height: 48px;
  }
`;

export const Title = styled.h4`
  ${({ theme }) => theme.typography.size.title.t03}
`;

export const Desc = styled.h4`
  ${({ theme }) => theme.typography.size.subtitle.s01}
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  position: relative;
  margin-bottom: 10px;
`;

export const Edit = styled.button`
  width: 40px;
  height: 20px;
  color: #c0cbff;
  border: 1px solid #c0cbff;
  border-radius: 5px;
`;

export const Delete = styled.button`
  width: 40px;
  height: 20px;
  color: #ff9797;
  border: 1px solid #ff9797;
  border-radius: 5px;
`;
