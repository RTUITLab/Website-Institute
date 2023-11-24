import Style from './switch.module.scss';

type Props = {
  heading: string;
  side: string;
};

const SideSwitchs: {
  left: string;
  center: string;
  right: string;
} = {
  left: Style.Left,
  center: Style.Center,
  right: Style.Right,
};

export default function Switch({ heading, side }: Props) {
  return (
    <div className={Style.Switch}>
      <article>
        <h3>{heading}</h3>
      </article>
      <div className={SideSwitchs[side as keyof typeof SideSwitchs]}></div>
    </div>
  );
}
