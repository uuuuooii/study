import { css } from '@emotion/react';
import weights from './wights';

const title = {
  t01: css`
    font-size: 1.75rem;
    line-height: 120%;
    ${weights.medium}
  `,
  t02: css`
    font-size: 1.5rem;
    line-height: 120%;
    ${weights.medium}
  `,
  t03: css`
    font-size: 0.875rem;
    line-height: 120%;
    ${weights.medium}
  `,
};

const subtitle = {
  s01: css`
    font-size: 0.875rem;
    ${weights.extralight}
  `,
};

const size = { title, subtitle };

export default size;
