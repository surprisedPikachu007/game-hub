import bullsEye from "../assets/bullseye.png";
import thumbsUp from "../assets/thumbs-up.png";
import soso from "../assets/so-so.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullsEye, alt: "exceptional" },
    4: { src: thumbsUp, alt: "good" },
    3: { src: soso, alt: "meh" },
  };

  console.log(emojiMap[rating]);

  return <Image {...emojiMap[rating]} boxSize="40px" marginTop={1} />;
};

export default Emoji;
