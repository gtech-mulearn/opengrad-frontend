import styles from "./ImageHoverBox.module.css";
type Props = {
  image: any;
  name: string;
  description?: string;
  width: string;
  height: string;
  className?: string;
};

export const ImageHoverBox = ({
  image,
  name,
  description,
  width,
  height,
  className,
}: Props) => {
  console.log(className)
  return (
    <div className={styles.ImageHoverBoxWrapper + " " + className}>
      <div
        className={styles.ImageHoverBoxWrap}
        style={{ width: width, height: height }}
      >
        <div className={styles.FrontDiv}>
          <img src={image} alt="" />
        </div>
        <div className={styles.BackDiv}></div>
      </div>
      <div className={styles.Content}>
        <h2>{name}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
