import VikaImage from '@/public/image/vika/vika.webp';
import Info from '@/public/svg/info.svg';
import Base from '@/public/svg/vika/Base.svg';
import News from '@/public/svg/vika/News.svg';
import Schedule from '@/public/svg/vika/Schedule.svg';
import PROIT from '@/public/svg/vika/PRO_IT.svg';
import Education from '@/public/svg/vika/Education.svg';
import Retakes from '@/public/svg/vika/Retakes.svg';
import Event from '@/public/svg/vika/Event.svg';
import Job from '@/public/svg/vika/Job.svg';
import HITECH from '@/public/svg/vika/HITECH.svg';

export default async function dataGetVika() {
  const data = {
    menuSection: {
      image: VikaImage,
      text: 'Вика и новости института',
    },
    sections: [
      {
        sectionId: {
          link: 'hello_vika',
          text: 'ЗНАКОМТЕСЬ — ВИКА!',
        },
        titleText: {
          heading: 'ЗНАКОМТЕСЬ — ВИКА!',
          text: [
            'Виртуальный информационно-коммуникационный ассистент нашего Института будет рада помочь каждому. Она умеет отвечать на наиболее часто возникающие вопросы у студентов, может подсказать дорогу и предложить график пересдач, который обновляется раз в сутки.',
            'Вика стала полноценным инструменты передачи информации от администрации и Студенческого союза МИРЭА студентам. С её помощью ты всегда будешь в курсе свежих новостей и сможешь находить всю важную информацию за считанные секунды. Все новости в ней разделены на категории:',
          ],
        },
        elements: [
          {
            type: 'table',
            array: [
              {
                numberOrImage: Base,
                heading: 'Общее',
                text: ['Общая информация для студентов ИИТ'],
              },
              {
                numberOrImage: News,
                heading: 'Новости sumirea',
                text: ['Новости и события студенческого союза МИРЭА'],
              },
              {
                numberOrImage: Schedule,
                heading: 'Расписание и сессия',
                text: ['Расписание занятий и сессии, а также информация о сдаче в резервный день'],
              },
              {
                numberOrImage: PROIT,
                heading: 'Ответственно PRO ИТ',
                text: [
                  'Проект ответственного по работе со студентами ИИТ. Расскажет об устройстве Института и главных вещах в жизни каждого студента',
                ],
              },
              {
                numberOrImage: Education,
                heading: 'Дополнительное образование',
                text: ['Рассылка новостей о курсах и дополнительных образовательных программах для студентов ИИТ'],
              },
              {
                numberOrImage: Retakes,
                heading: 'Пересдачи',
                text: ['Информация об изменении форматов пересдач и новой информации по ликвидации задолженностей'],
              },
              {
                numberOrImage: Event,
                heading: 'Соревнования',
                text: ['Новости о хакатонах, акселераторах и олимпиадах'],
              },
              {
                numberOrImage: Job,
                heading: 'Вакансии',
                text: ['информация о стажировках, практиках и вакансиях для студентов ИИТ'],
              },
              {
                numberOrImage: HITECH,
                heading: 'HI-TECH REVISION',
                text: ['Выпуски техноблога РТУ МИРЭА'],
              },
            ],
            side: 'left',
            background: 'gray',
            gapInside: '36px',
            gapOutside: '32px',
            imgSize: '110px',
          },
        ],
      },
    ],
    downTransition: null,
  };
  return data;
}
