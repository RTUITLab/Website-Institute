import ImageScreensaver1 from '@/public/image/лаба_инженерка.webp';

export async function GET(request: Request, { params }: { params: { api: string } }) {
  let data = {};
  switch (params.api) {
    case 'laboratory_import_substitution_of_information_technologies':
      data = {
        menuSection: {
          image: ImageScreensaver1,
          text: 'Учебно-научный испытательный комплекс «Импортозамещение информационных технологий»',
        },
        sections: [{}],
      };
      break;
    case 'laboratory_technology_analytics_modeling_design_and_digital_prototyping':
      break;
    case 'laboratory_motion_capture':
      break;
    case 'laboratory_immersive_technologies':
      break;
  }
  return Response.json({ response: true });
}
