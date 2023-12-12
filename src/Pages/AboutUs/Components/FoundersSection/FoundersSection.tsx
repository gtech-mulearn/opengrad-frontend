import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox"
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import amith from "../../../assets/founders/amith.png";
import sahil from "../../../assets/founders/sahil.png";
import shahid from "../../../assets/founders/shahid.png";

type Props = {}

export const FoundersSection = (_props: Props) => {
  return (
    <div>
      <h1></h1>
      <SectionHeading title="The Founders" />
      <div>
        <ImageHoverBox
          image={sahil}
          name={"Sahil Sameer"}
          width={"250px"}
          height={"270px"}
          description="Builder of OpenGrad"
        />
        <ImageHoverBox
          image={amith}
          name={"Amith Tony Joseph"}
          width={"250px"}
          height={"270px"}
          description="Co-Founder & Product Lead"
        />
        <ImageHoverBox
          image={shahid}
          name={"Mohammed Shahid CO"}
          width={"250px"}
          height={"270px"}
          description="Co-Founder, OpenGrad"
        />
      </div>
    </div>
  );
}