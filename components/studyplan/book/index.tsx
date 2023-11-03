import Style from "./bookstudyplan.module.scss";
import Switch from "@/components/studyplan/switch";

export default function BookStudyPlan()
{
    return(
        <div className={Style.BookStudyPlan}>
            <article>

            </article>
            <div>
                <Switch heading={"УЧЕБНЫЙ СЕМЕСТР"} side={"right"} />
                <Switch heading={"ПРОФИЛЬ/СПЕЦИАЛЬНОСТЬ"} side={"center"} />
                <Switch heading={"ГОД НАЧАЛА ОБУЧЕНИЯ"} side={"left"} />
            </div>
        </div>
    )
}