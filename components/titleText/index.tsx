import Style from './heading.module.scss';

type Props = {
  heading: string;
  text?: string[] | null;
};

export default function TitleText({ heading, text = null }: Props) {
  return (
    <div className={Style.heading}>
      <h1>{heading}</h1>
      {text === null ? <></> : text.map((elem, index) => <h3 key={heading + '_' + index}>{elem}</h3>)}
    </div>
  );
}
