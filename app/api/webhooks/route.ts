import { dbConnect } from '@/db/Connection'
import User from '@/db/Models/UserModel';
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    if (evt.type === 'user.created') {
    try{
      await dbConnect();
      const CreatedUser = await User.create({
        clerkId: evt.data.id,
        FirstName: evt.data.first_name || '',
        Email: evt.data.email_addresses?.[0]?.email_address || ''
      })

      console.log("User created with Email: "+CreatedUser.Email);
      return new Response('User created successfully', { status: 201 })
    }catch (error) {
      console.error('Error processing user.created event:', error)
      return new Response('Error processing event', { status: 400 })
    }
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}