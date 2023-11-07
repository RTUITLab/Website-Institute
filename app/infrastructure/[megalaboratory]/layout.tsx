export async function generateStaticParams() {
    return [{megalaboratory: "laboratory_import_substitution_of_information_technologies"},{megalaboratory: "laboratory_technology_analytics_modeling_design_and_digital_prototyping"},{megalaboratory: "laboratory_motion_capture"},{megalaboratory: "laboratory_immersive_technologies"}];
}

export const revalidate = 7200;
export const dynamicParams = false;

export default function MegalaboratoryLayout({ children }: { children: React.ReactNode }) {
    return children;
}