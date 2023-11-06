import Screensaver from "@/components/screensaver";
import TitleText from "@/components/titleText";
import Style from "./direction.module.scss";
import {Table, TableInformation, TableStroke} from "@/components/tables/table";
import GeneralDisciplines from "@/public/svg/Выпускники_Вика.svg";
import ProfileDisciplines from "@/public/svg/Профильные_дисциплины_Вика.svg";
import DisciplinesToChoose from "@/public/svg/Дисциплины_на_выбор_Вика.svg";
import {StaticImageData} from "next/image";
import SvgQualification from "@/public/svg/Qualification.svg";
import SvgFormTraining from "@/public/svg/FormTraining.svg";
import SvgDurationTraining from "@/public/svg/DurationTraining.svg";
import SvgEntranceTests from "@/public/svg/EntranceTests.svg";
import SvgBudgetPlaces from "@/public/svg/BudgetPlaces.svg";
import SvgPassingScore from "@/public/svg/PassingScore.svg";
import SvgCost from "@/public/svg/Cost.svg";
import SvgOtherSources from "@/public/svg/OtherSources.svg";
import axios from "axios";
import SectionProfiles from "@/components/profiles/section";
import {ApiProfiles, StaticData} from "@/api";
import BookStudyPlan from "@/components/studyplan/book";
import Section from "@/components/sections";

const arrayCurriculum = [
    {
        ImageOrHeading: GeneralDisciplines,
        text: "Общие дисциплины направления",
        alt: "Общие дисциплины",
        h2: true
    },
    {
        ImageOrHeading: ProfileDisciplines,
        text: "Специализированные дисциплины профиля",
        alt: "Специализированные дисциплины",
        h2: true
    },
    {
        ImageOrHeading: DisciplinesToChoose,
        text: "Блоки дисциплин профиля на выбор",
        alt: "Дисциплины на выбор",
        h2: true
    }
];

async function getAPI(url: string)
{
    const data = await axios({
        method: 'get',
        url: url
    })
    return {
        last_year_threshold: await data.data.last_year_threshold,
        places_budget: await data.data.places_budget,
        places_quota: await data.data.places_quota,
        places_special_quota: await data.data.places_special_quota,
        places_target: await data.data.places_target,
        price: await data.data.price,
        price_discount_10: await data.data.price_discount_10,
        price_discount_20: await data.data.price_discount_20
    }
}


export default async function Direction({ params } : { params: { direction: string } })
{

    const textCurriculum: string = "Учебный план включает три типа дисциплин: общие, специализированные дисциплины профиля и блок дисциплин профиля на выбор. Общие дисциплины изучаются независимо от выбранного профиля, их прохождение обязательно для всех студентов направления.  Специализированные дисциплины профиля предназначены для студентов определенных профилей и изучаются только ими. Блоки дисциплин профиля на выбор, предоставляет студентам возможность выбрать дисциплины, и изучать только их. ";

    const arraySpecializationFact: {ImageOrHeading: StaticImageData | string, text: string, alt: string | null | undefined, h2: boolean}[] = [];

    if (StaticData(params.direction).specializationFact.partners !== null)
    {
        arraySpecializationFact.push({
            ImageOrHeading: String(StaticData(params.direction).specializationFact.partners!.number),
            text: StaticData(params.direction).specializationFact.partners!.text,
            alt: null,
            h2: true
        });
    }

    arraySpecializationFact.push({
        ImageOrHeading: String(StaticData(params.direction).specializationFact.quantity.number),
        text: StaticData(params.direction).specializationFact.quantity.text,
        alt: null,
        h2: true
    });

    arraySpecializationFact.push({
        ImageOrHeading: StaticData(params.direction).specializationFact.graduates+"%",
        text: "Выпускников работающих по специальности",
        alt: null,
        h2: true
    });

    const arrayTable: {linkImage: StaticImageData, heading: string, text: string, alt: string}[] = StaticData(params.direction).sphereDirection.map((elem) => {return {linkImage: elem.linkImage, heading: elem.heading, text: elem.text, alt: elem.heading}});

    const arrayInformation: {linkImage: StaticImageData, heading: string, text: {text: string, link: string | null}[], alt: string}[] = [
        {
            linkImage: SvgQualification,
            heading: "Квалификация",
            text: [{text: StaticData(params.direction).dataAdmission.Qualification, link: null}],
            alt: "Квалификация"
        },
        {
            linkImage: SvgFormTraining,
            heading: "Форма обучения",
            text: [{text: StaticData(params.direction).dataAdmission.FormTraining, link: null}],
            alt: "Форма обучения"
        },
        {
            linkImage: SvgDurationTraining,
            heading: "Срок обучения",
            text: StaticData(params.direction).dataAdmission.DurationTraining.map((elem, index) => {return {text: elem, link: null}}),
            alt: "Срок обучения"
        }
    ]

    if (StaticData(params.direction).dataAdmission.urlAPI !== null && StaticData(params.direction).dataAdmission.urlAPI !== undefined)
    {

        const getDataApi = await getAPI(StaticData(params.direction).dataAdmission.urlAPI!)

        if (getDataApi.places_budget !== null && getDataApi.places_budget !== undefined && getDataApi.last_year_threshold !== null && getDataApi.last_year_threshold !== undefined && getDataApi.price !== null && getDataApi.price !== undefined)
        {
            arrayInformation.push(
                {
                    linkImage: SvgPassingScore,
                    heading: "Проходной балл",
                    text: [
                        {
                            text: getDataApi.last_year_threshold+" в 2023 году",
                            link: null
                        }
                    ],
                    alt: "Проходной балл"
                },
                {
                    linkImage: SvgEntranceTests,
                    heading: "Вступительные испытания",
                    text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem, index) => {return {text: elem, link: null}}),
                    alt: "Вступительные испытания"
                },
                {
                    linkImage: SvgBudgetPlaces,
                    heading: "Количество бюджетных мест",
                    text: [
                        {
                            text: "Всего в 2023 году: "+getDataApi.places_budget,
                            link: null
                        }, (getDataApi.places_quota !== null && getDataApi.places_quota) ?
                        {
                            text: "Особая квота: "+getDataApi.places_quota,
                            link: null
                        } : {} as { text: string, link: string | null }, (getDataApi.places_special_quota !== null && getDataApi.places_special_quota) ?
                        {
                            text: "Отдельная квота: "+getDataApi.places_special_quota,
                            link: null
                        } : {} as { text: string, link: string | null }, (getDataApi.places_target !== null && getDataApi.places_target) ?
                        {
                            text: "Целевая квота: "+getDataApi.places_target,
                            link: null
                        } : {} as { text: string, link: string | null }
                    ],
                    alt: "Количество бюджетных мест"
                },
                {
                    linkImage: SvgCost,
                    heading: "Стоимость обучения в год",
                    text: [
                        {
                            text: "Полная стоимость: "+getDataApi.price,
                            link: null
                        }, (getDataApi.price_discount_10 !== null && getDataApi.price_discount_10) ?
                        {
                            text: "С учётом базовой скидки: "+getDataApi.price_discount_10,
                            link: null
                        } : {} as { text: string, link: string | null }, (getDataApi.price_discount_20 !== null && getDataApi.price_discount_20) ?
                        {
                            text: "С учётом специальной скидки: "+getDataApi.price_discount_20,
                            link: null
                        } : {} as { text: string, link: string | null }
                    ],
                    alt: "Стоимость обучения в год"
                },
                {
                    linkImage: SvgOtherSources,
                    heading: (typeof(StaticData(params.direction).dataAdmission.OtherSources.ChatVK) === 'string' || typeof(StaticData(params.direction).dataAdmission.OtherSources.ChatTG) === 'string') ? "Другие источники информации и чаты" : "Другие источники информации",
                    text: [
                        {
                            text: "Сайт РТУ МИРЭА",
                            link: StaticData(params.direction).dataAdmission.OtherSources.WebsiteMIREA
                        },
                        {
                            text: "Сайт приёмной комиссии РТУ МИРЭА",
                            link: StaticData(params.direction).dataAdmission.OtherSources.WebsiteAdmissionsCommittee
                        }, (StaticData(params.direction).dataAdmission.OtherSources.ChatVK !== null && StaticData(params.direction).dataAdmission.OtherSources.ChatVK !== undefined) ?
                        {
                            text: "Чат для абитуриентов в VK",
                            link: StaticData(params.direction).dataAdmission.OtherSources.ChatVK
                        } : {} as { text: string, link: string | null },
                        (StaticData(params.direction).dataAdmission.OtherSources.ChatTG !== null && StaticData(params.direction).dataAdmission.OtherSources.ChatTG !== undefined) ?
                            {
                                text: "Чат для абитуриентов в TG",
                                link: StaticData(params.direction).dataAdmission.OtherSources.ChatTG
                            } : {} as { text: string, link: string | null }
                    ],
                    alt: "Источники информации"
                })
        }
        else
        {
            arrayInformation.push({
                linkImage: SvgEntranceTests,
                heading: "Вступительные испытания",
                text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem, index) => {return {text: elem, link: null}}),
                alt: "Вступительные испытания"
            })
        }
    }
    else
    {
        arrayInformation.push({
            linkImage: SvgEntranceTests,
            heading: "Вступительные испытания",
            text: StaticData(params.direction).dataAdmission.EntranceTests.map((elem, index) => {return {text: elem, link: null}}),
            alt: "Вступительные испытания"
        })
    }


    return (
        <>
            <Screensaver linkImage={StaticData(params.direction).linkImage} text={StaticData(params.direction).title} alt={"Заставка - инфраструктура"} backgroundBlack={true} />
            <main>
                <Section>
                    <TitleText heading={StaticData(params.direction).heading} text={[StaticData(params.direction).text]} />
                    <Table array={arrayTable} />
                </Section>
                <Section>
                    <TitleText heading={"ИНФОРМАЦИЯ ПО ПОСТУПЛЕНИЮ"} />
                    <TableInformation array={arrayInformation} />
                </Section>
                <Section>
                    <TitleText heading={"СПЕЦИАЛЬНОСТИ / ПРОФИЛИ"} text={[StaticData(params.direction).specializationText]} />
                    <TableStroke array={arraySpecializationFact} />
                    <SectionProfiles array={ApiProfiles(params.direction)}/>
                </Section>
                <Section>
                    <TitleText heading={"УЧЕБНЫЙ ПЛАН"} text={[textCurriculum]} />
                    <TableStroke array={arrayCurriculum} />
                    <BookStudyPlan />
                </Section>
                {StaticData(params.direction).video === null ? <></> :
                    <Section>
                        <TitleText heading={"ВИДЕО"} text={[StaticData(params.direction).video!.text]} />
                        <iframe className={Style.Video} src={StaticData(params.direction).video!.videoURL} frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen />
                    </Section>
                }
            </main>
        </>
    )
}