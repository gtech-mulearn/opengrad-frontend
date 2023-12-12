import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";


type Props = {}

export const AdvisoryPanel = (_props: Props) => {
  return (
    <div>
      <h1>Advisory Panel</h1>
      <div>
        <ImageHoverBox />
        <ImageHoverBox />
        <ImageHoverBox />
      </div>
    </div>
  );
}