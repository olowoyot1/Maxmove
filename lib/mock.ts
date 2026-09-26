export const shipments = [
  { trackingNumber: 'MMX-2026-0001', customer: 'Acme Distribution Ltd', origin: 'Lagos', destination: 'Ikeja', status: 'In Transit', amount: 85000, eta: '27 Sep 2026' },
  { trackingNumber: 'MMX-2026-0002', customer: 'Prime Retail', origin: 'Lagos', destination: 'Abuja', status: 'Out for Delivery', amount: 210000, eta: '26 Sep 2026' },
  { trackingNumber: 'MMX-2026-0003', customer: 'Northstar Foods', origin: 'Kano', destination: 'Kaduna', status: 'Delivered', amount: 72000, eta: '24 Sep 2026' },
  { trackingNumber: 'MMX-2026-0004', customer: 'Vertex Stores', origin: 'Port Harcourt', destination: 'Benin', status: 'Booked', amount: 96000, eta: '29 Sep 2026' }
];
export const vehicles = [
  { plate: 'KJA-482-LA', type: 'Box Truck', driver: 'Michael James', status: 'On Route', route: 'Lagos → Ikeja' },
  { plate: 'ABC-913-LG', type: 'Van', driver: '—', status: 'Available', route: '—' },
  { plate: 'APP-722-KD', type: 'Box Truck', driver: 'Daniel Musa', status: 'Maintenance', route: '—' }
];
export const customers = [
  { name: 'Acme Distribution Ltd', contact: 'ops@acme.test', shipments: 28, balance: 420000 },
  { name: 'Prime Retail', contact: 'logistics@prime.test', shipments: 19, balance: 185000 },
  { name: 'Northstar Foods', contact: 'transport@northstar.test', shipments: 14, balance: 0 },
  { name: 'Vertex Stores', contact: 'admin@vertex.test', shipments: 9, balance: 96000 }
];
