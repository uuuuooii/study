import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/db';
import Post from '@/lib/db/schema';

// eslint-disable-next-line import/prefer-default-export
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connect();

    const blogs = await Post.findById(id);
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};
