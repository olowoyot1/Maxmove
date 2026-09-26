import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';
import { demoShipments, demoEvents } from '@/lib/demo-data';

export async function GET(_: Request, { params }: { params: Promise<{ tracking: string }> }) {
  const { tracking } = await params;
  try {
    const shipment = await db.shipment.findUnique({ where:{trackingNumber:tracking}, include:{trackingEvents:{orderBy:{timestamp:'desc'}}} });
    if (shipment) return NextResponse.json({source:'database', shipment, events:shipment.trackingEvents});
  } catch {}
  const s = demoShipments.find(x=>x.trackingNumber.toLowerCase()===tracking.toLowerCase());
  if (!s) return NextResponse.json({error:'Shipment not found'}, {status:404});
  return NextResponse.json({source:'demo', shipment:s, events:demoEvents[s.trackingNumber] ?? []});
}
