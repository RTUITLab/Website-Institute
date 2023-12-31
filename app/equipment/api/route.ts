import { NextResponse } from 'next/server';
import dataGetEquipment from './dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetEquipment(), { status: 200 });
}
