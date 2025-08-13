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
    }
    }

    if (evt.type === 'user.deleted') {
      try{
        await dbConnect();
        const deletedUser = await User.findOneAndDelete({clerkId:evt.data.id});
        
          console.log("User deleted with Email: "+deletedUser.Email);
          return new Response('User deleted successfully', { status: 200 })
      }
      catch (error) {
        console.error('Error processing user.deleted event:', error)
      }
    }

    if (evt.type === 'user.updated') {
      try {
        await dbConnect();
        const updatedUser = await User.findOneAndUpdate({
            clerkId: evt.data.id,
            FirstName: evt.data.first_name || '',
            Email: evt.data.email_addresses?.[0]?.email_address || ''
        })
        console.log("User updated with Email: "+updatedUser.Email);
        return new Response('User updated successfully', { status: 200 })
      } catch (error) {
        console.error('Error processing user.updated event:', error);
      }
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}