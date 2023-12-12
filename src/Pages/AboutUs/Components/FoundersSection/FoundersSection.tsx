import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox"


type Props = {}

export const FoundersSection = (_props: Props) => {
  return (
    <div>
      <h1>The Founders</h1>
      <div>
        <ImageHoverBox />
        <ImageHoverBox />
        <ImageHoverBox />
      </div>
    </div>
  );
}