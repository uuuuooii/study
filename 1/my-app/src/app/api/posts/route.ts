import { NextResponse } from 'next/server';

const GET = async request => {
  // fetch

  return new NextResponse('It work!', { status: 200 });
};
export default GET;
