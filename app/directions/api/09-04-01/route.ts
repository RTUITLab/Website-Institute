import dataGet090401 from './dataGet';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(await dataGet090401(), { status: 200 });
}
