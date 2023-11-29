import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Post from '@/lib/db/schema';

export const GET = async () => {
  try {
    await connect();

    const blogs = await Post.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};

export const POST = () => {};
