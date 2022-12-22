import styled, { css } from "styled-components";
interface iStyledImg {
  src: string;
  alt: string;
  location: keyof typeof ImgTypeVariations;
}
const ImgTypeVariations = {
  logo: css`
    width: 145px;
    height: 21px;
  `,
  header: css``,
};

export const StyledImg = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))<iStyledImg>`
  ${({ location }) => ImgTypeVariations[location || "logo"]}
`;
