import { StyledImg } from "./style";

interface iImg {
  src: string;
  alt: string;
  location: "logo" | "header";
}

export const Img = ({ src, alt, location }: iImg) => {
  return <StyledImg src={src} alt={alt} location={location} />;
};
