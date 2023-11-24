import Image, { StaticImageData } from 'next/image';
import Style from './profile.module.scss';
import { ButtonDefault } from '@/components/buttons';
import Modal from '@/components/modal';
import { useState } from 'react';
import classNames from 'classnames';

type Props = {
  heading: string;
  linkImage: StaticImageData;
  direction: { title: string; link: string } | null;
  partner?: string | null;
  text: string;
  department: string;
  areasStudy: {
    imageMin?: StaticImageData | null | undefined;
    image: StaticImageData;
    heading: string;
    levelBase: boolean;
  }[];
};

export default function Profile({ heading, linkImage, direction, partner = null, text, department, areasStudy }: Props) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <>
      <article className={Style.Profile}>
        <Image src={linkImage} alt={heading} />
        <div>
          <div className={Style.BlockBetween}>
            <div>
              <h2>{heading}</h2>
              {direction !== null ? <h3>{direction!.title}</h3> : <></>}
              {partner !== null ? <h3>{partner}</h3> : <></>}
            </div>
            <div></div>
          </div>
          <div className={classNames(Style.BlockBetween, Style.BlockRevers)}>
            <ButtonDefault text={'Подробнее'} onClick={() => setHidden(false)} image={null} />
          </div>
        </div>
      </article>
      <Modal
        image={linkImage}
        titleProfile={heading}
        titlePartner={partner}
        titleDepartment={department}
        text={text}
        spheresArray={areasStudy}
        onClick={() => setHidden(true)}
        hidden={hidden}
      />
    </>
  );
}
