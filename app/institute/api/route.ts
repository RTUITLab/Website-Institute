import { NextResponse } from 'next/server';
import dataGetInstitute from './dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetInstitute(), { status: 200 });
}
