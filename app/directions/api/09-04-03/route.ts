import dataGet090403 from './dataGet';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(await dataGet090403(), { status: 200 });
}
