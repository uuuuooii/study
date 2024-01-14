import { NextRequest, NextResponse } from 'next/server';
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

export const POST = async (request: NextRequest) => {
  // 클라이언트로부터 전송된 JSON 데이터를 추출
  const body = await request.json();
  // 전송된 데이터를 사용하여 스키마 형식으로 적용
  const newPost = new Post(body);
  try {
    await connect();

    // 새로운 포스트를 데이터베이스에 저장
    await newPost.save();

    return new NextResponse('post has been created', {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
