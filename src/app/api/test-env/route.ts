import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
    emailPass: process.env.EMAIL_PASS ? 'Set' : 'Not set',
    allEnvVars: Object.keys(process.env).filter(key => key.startsWith('EMAIL_'))
  });
} 