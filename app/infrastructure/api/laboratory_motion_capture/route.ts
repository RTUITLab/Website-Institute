import { NextResponse } from 'next/server';
import dataGetLMC from '@/app/infrastructure/api/laboratory_motion_capture/dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetLMC(), { status: 200 });
}
