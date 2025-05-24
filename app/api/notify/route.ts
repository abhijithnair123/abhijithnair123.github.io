import { NextResponse } from 'next/server';

// Add dynamic configuration
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    console.log('API route hit');
    const { searchParams } = new URL(request.url);
    const message = searchParams.get('message');
    const page = searchParams.get('page') || 'Unknown page';
    const userAgent = request.headers.get('user-agent') || 'Unknown browser';
    const ip = request.headers.get('x-forwarded-for') || 'Unknown IP';

    console.log('Request details:', { message, page, userAgent, ip });

    const botToken = '7593739598:AAHgs89k26oXZB4cCUeA5a5nVYrFtIzz0lc';
    const chatId = '465143364';

    if (!botToken || !chatId) {
      console.error('Missing Telegram configuration');
      return NextResponse.json({ error: 'Telegram configuration missing' }, { status: 500 });
    }

    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const fullMessage = `
🔔 New Visit Alert!
📄 Page: ${page}
🌐 IP: ${ip}
🔍 Browser: ${userAgent}
📝 Message: ${message}
⏰ Time: ${new Date().toLocaleString()}
    `.trim();

    console.log('Sending message to Telegram:', fullMessage);

    const response = await fetch(telegramURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: fullMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API error:', errorText);
      throw new Error(`Failed to send Telegram message: ${errorText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error in notify route:', error);
    return NextResponse.json(
      { error: 'Failed to send notification', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
