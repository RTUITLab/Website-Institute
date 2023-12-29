import Style from './screensaver.module.scss';
import Image, { StaticImageData } from 'next/image';
import { ButtonId, ButtonLinkDefault } from '@/components/buttons';

type Props = {
  linkImage: StaticImageData;
  text: string;
  alt: string;
  positionUp?: boolean;
  id: { text: string; link: string }[];
  backgroundBlack?: boolean;
};

export default function Screensaver({ linkImage, text, alt, backgroundBlack = true, id, positionUp = false }: Props) {
  return (
    <div className={Style.Screensaver} id={'menu'}>
      <Image className={positionUp ? Style.ImageUp : Style.ImageCenter} src={linkImage} alt={alt} />
      <div className={backgroundBlack ? Style.backgroundBlack : undefined}>
        <h1>{text}</h1>
        <div>
          {id.map((elem, index) => (
            <ButtonLinkDefault tagLink={false} key={'screensaver_' + index} link={'#' + elem.link} text={elem.text} />
          ))}
        </div>
        <article>
          <ButtonId link={'#' + id[0].link} />
        </article>
      </div>
    </div>
  );
}
