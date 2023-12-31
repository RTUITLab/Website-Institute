import dataGetLIT from '@/app/infrastructure/api/laboratory_immersive_technologies/dataGet';
import dataGetLISOIT from '@/app/infrastructure/api/laboratory_import_substitution_of_information_technologies/dataGet';
import dataGetLMC from '@/app/infrastructure/api/laboratory_motion_capture/dataGet';
import dataGetLTAMDADP from '@/app/infrastructure/api/laboratory_technology_analytics_modeling_design_and_digital_prototyping/dataGet';

export default async function getMegalaboratory(title: string, mode: 'default' | 'route' = 'default') {
  try {
    const response = await fetch('http://localhost:3000/infrastructure/api/' + title);
    return await response.json();
  } catch (e) {
    switch (mode) {
      case 'route':
        switch (title) {
          case 'laboratory_immersive_technologies':
            return await dataGetLIT();
          case 'laboratory_import_substitution_of_information_technologies':
            return await dataGetLISOIT();
          case 'laboratory_motion_capture':
            return await dataGetLMC();
          case 'laboratory_technology_analytics_modeling_design_and_digital_prototyping':
            return await dataGetLTAMDADP();
          default:
            throw e;
        }
      case 'default':
      default:
        throw e;
    }
  }
}
