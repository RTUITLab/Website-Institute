import Style from './images.module.scss';
import Image, { StaticImageData } from 'next/image';

type Props = {
  array: StaticImageData[];
  titleKeyAndAlt: string;
};

export default function Images({ array, titleKeyAndAlt }: Props) {
  return (
    <div className={Style.ImageCampus}>
      {array.map((elem, index) => (
        <Image key={titleKeyAndAlt + '_' + index} src={elem} alt={titleKeyAndAlt + ' ' + index} />
      ))}
    </div>
  );
}
