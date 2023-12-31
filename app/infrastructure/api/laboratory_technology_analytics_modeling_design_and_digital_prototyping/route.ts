import { NextResponse } from 'next/server';
import dataGetLTAMDADP from '@/app/infrastructure/api/laboratory_technology_analytics_modeling_design_and_digital_prototyping/dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetLTAMDADP(), { status: 200 });
}
