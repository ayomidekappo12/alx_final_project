import { css } from "@emotion/react";

export const mobile = (styles) => css`
  @media only screen and (max-width: 380px) {
    ${styles}
  }
`;
