import Screensaver from "@/components/screensaver";
import HelloSection from "@/components/helloSection";
import NoImage from "@/public/NoImage.webp";
import {Section75} from "@/components/sections";
import {InformationTextAndImage, InformationTextAndImageAndButton} from "@/components/information";
import V78 from "@/public/В78.webp";
import MP1 from "@/public/МП1.webp";
import DM1 from "@/public/ОБ1.webp";
import {ButtonLinkAppBlue} from "@/components/buttons"; // общажитие


export default function Infrastructure()
{
    const buttons = [
        <ButtonLinkAppBlue key={"1BLAB"} linkButton={"./"} text={"кнопка"} />,
        <ButtonLinkAppBlue key={"2BLAB"} linkButton={"./"} text={"кнопка"} />
    ]

    const arrayElementsBuilding = [
        <InformationTextAndImage key="1I" heading={"Кампус, где проводятся основные занятия"} text1={"95,5% всех учебных занятий проходят в главном кампусе РТУ МИРЭА, который находится по адресу: \"г. Москва, Проспект Вернадского, д. 78\". Занятия и лекции для студентов проводятся в аудиториях корпусов «А», «И», «Г», а также в информационно-вычислительном центре и в локации нашего института."} text2={"На территории кампуса по адресу Проспект Вернадского, д. 78, созданы все необходимые условия и пространства для внеучебной деятельности, доступные всем студентам РТУ МИРЭА, независимо от их института. В числе них: столовые, кафетерии, чилл-зоны, проектные зоны и коворкинг, киберспортивный центр (игровой клуб), библиотека с читальным залом, игровая зона с теннисными и бильярдными столами, конференц-залы для проведения мероприятий, а также медицинские пункты и спортивная инфраструктура — от тренажерного зала до обширного спортивного комплекса с зоной для офп, баскетбола, волейбола и других видов спорта."} linkImage={V78} alt={"Вернадского 78"} />,
        <InformationTextAndImage key="2I" heading={"ДРУГИЕ КАМПУСЫ"} text1={"4,5% оставшихся учебных занятий проводятся в другом кампусе РТУ МИРЭА, который находится по адресу \"г. Москва, улица Малая Пираговка, д. 1, стр. 5\". В этом кампусе студенты изучают такие дисциплины, как \"Философия\", а также могут заниматься \"Правоведением\" и \"Искусственным интеллектом\". Однако занятия по последним двум дисциплинам также могут проводиться и в кампусе на Проспекте Вернадского, д. 78."} text2={"Более того, студенты нашего института могут посещать другие кампусы и пользоваться их инфраструктурой. Например, в кампусе на улице Стромынка, д. 20, доступен бассейн, а на улице Усачёва, д. 7/1, действует военный учебный центр. Кроме того, регулярно проводятся студенческие развлекательные мероприятия, открытые для всех студентов РТУ МИРЭА. Такие мероприятия организуются как в главном кампусе на Проспекте Вернадского, д. 78, так и в кампусе на улице Стромынка, д. 20, а также в кампусе института тонких химических технологий им. М.В. Ломоносова, на Проспекте Вернадского, д. 86."} linkImage={MP1} alt={"Малая Пироговская 1"} />,
        <InformationTextAndImageAndButton key="3I" heading={"ОБЩЕЖИТИЯ"} text1={"Абитуриентам, проживающим за автодорогой А-108, и поступающим на направления бакалавриата и магистратуры нашего университета, предоставляется возможность получить общежитие в РТУ МИРЭА. Возможность получения места в общежитие также доступна во время учебы через включение в специальную очередь."} text2={"На момент проведения приемной компании в 2023 году РТУ МИРЭА предоставляет шесть общежитий для студентов. Расстояние до кампуса на Проспекте Вернадского 78 может варьироваться от 10 минут до 1 часа в зависимости от выбранного общежития. Кроме того, университет имеет возможность размещения абитуриентов, в общежитиях своих партнеров."} linkImage={DM1} alt={"Общежитие 1"} buttonsArray={buttons}/>
    ]

    return (
        <>
            <Screensaver linkImage={NoImage} text={"ИНФРАСТРУКТУРА ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"} alt={"Заставка - инфраструктура"} backgroundBlack={true} />
            <main>
                <section>
                    <div>
                        <HelloSection heading={"ИНФРАСТРУКТУРА ИНСТИТУТА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ"} text={"Институт информационных технологий располагает обширной и уникальной инфраструктурной базой, предназначенной для проведения семинарских занятий, лабораторных работ и других научно-образовательных мероприятий, доступных исключительно студентам института. В этой структуре включены как обычные аудитории наших кафедр, так и мегалаборатории, оснащенные уникальным и редким оборудованием. Кроме того, студенты нашего института имеют возможность пользоваться другими инфраструктурными объектами, которые также доступны для всех студентов РТУ МИРЭА. Это включает как обычные аудитории, так и просторные лекционные залы."} />
                        <Section75 arrayElements={arrayElementsBuilding} />
                    </div>
                </section>
            </main>
        </>
    )
}