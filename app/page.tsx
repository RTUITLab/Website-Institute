import styles from './page.module.scss';
import AppImage from "@/public/app.webp";
import Screensaver from "@/components/screensaver";
import Transition from "@/components/table/transition";

export default function Home() {
  return (
      <>
        <Screensaver linkImage={AppImage} text={"ИНФОРМАЦИОННЫЙ портал ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ РТУ МИРЭА"} alt={"Заставка - главная страница"} backgroundBlack={false} />
        <main>
            <Transition/>
        </main>
      </>
  )
}
