export const demoShipments = [
 {trackingNumber:'MMX-2026-0001', type:'INTERNATIONAL', mode:'AIR', sender:'Apex Fashion Ltd', receiver:'David Okafor', origin:'Lagos, Nigeria', destination:'London, United Kingdom', status:'IN_TRANSIT', location:'Heathrow Cargo Terminal', eta:'30 Sep 2026', customer:'Apex Fashion Ltd', service:'International Air Freight', updated:'Today, 08:42'},
 {trackingNumber:'MMX-2026-0002', type:'INTERSTATE', mode:'ROAD', sender:'BrightMart', receiver:'Chinedu Obi', origin:'Lagos, Nigeria', destination:'Abuja, Nigeria', status:'OUT_FOR_DELIVERY', location:'Abuja Municipal', eta:'26 Sep 2026', customer:'BrightMart', service:'Interstate Door-to-Door', updated:'Today, 09:05'},
 {trackingNumber:'MMX-2026-0003', type:'INTERSTATE', mode:'ROAD', sender:'MediPlus', receiver:'Sarah Ade', origin:'Lagos, Nigeria', destination:'Port Harcourt, Nigeria', status:'AT_WAREHOUSE', location:'MaxMove Lagos Hub', eta:'28 Sep 2026', customer:'MediPlus', service:'Interstate Express', updated:'Today, 07:35'},
 {trackingNumber:'MMX-2026-0004', type:'INTERNATIONAL', mode:'SEA', sender:'TradePoint Nigeria', receiver:'Michael James', origin:'Lagos, Nigeria', destination:'Dubai, UAE', status:'CUSTOMS', location:'Apapa Port, Lagos', eta:'05 Oct 2026', customer:'TradePoint Nigeria', service:'International Sea Freight', updated:'Yesterday, 17:20'}
];
export const demoEvents: Record<string,{status:string;location:string;note:string;timestamp:string}[]> = {
 'MMX-2026-0001': [
  {status:'BOOKED',location:'Lagos, Nigeria',note:'Shipment booking confirmed',timestamp:'24 Sep 2026, 09:10'},
  {status:'PICKED_UP',location:'Victoria Island, Lagos',note:'Cargo picked up from sender',timestamp:'24 Sep 2026, 13:40'},
  {status:'AT_WAREHOUSE',location:'MaxMove Lagos Hub',note:'Received and verified at export hub',timestamp:'25 Sep 2026, 08:25'},
  {status:'IN_TRANSIT',location:'Heathrow Cargo Terminal',note:'Arrived at destination airport cargo terminal',timestamp:'26 Sep 2026, 08:42'}
 ],
 'MMX-2026-0002': [
  {status:'BOOKED',location:'Lagos, Nigeria',note:'Shipment booking confirmed',timestamp:'25 Sep 2026, 10:05'},
  {status:'PICKED_UP',location:'Ikeja, Lagos',note:'Picked up and loaded',timestamp:'25 Sep 2026, 14:30'},
  {status:'IN_TRANSIT',location:'Abuja-Kaduna Expressway',note:'Vehicle is approaching Abuja',timestamp:'26 Sep 2026, 06:50'},
  {status:'OUT_FOR_DELIVERY',location:'Abuja Municipal',note:'Assigned to local delivery route',timestamp:'26 Sep 2026, 09:05'}
 ],
 'MMX-2026-0003': [{status:'BOOKED',location:'Lagos',note:'Booking confirmed',timestamp:'25 Sep 2026, 07:10'},{status:'AT_WAREHOUSE',location:'MaxMove Lagos Hub',note:'Awaiting interstate dispatch',timestamp:'26 Sep 2026, 07:35'}],
 'MMX-2026-0004': [{status:'BOOKED',location:'Lagos',note:'Sea freight booking confirmed',timestamp:'22 Sep 2026, 11:00'},{status:'AT_WAREHOUSE',location:'Apapa Port',note:'Cargo received for export processing',timestamp:'24 Sep 2026, 15:10'},{status:'CUSTOMS',location:'Apapa Port, Lagos',note:'Customs documentation under processing',timestamp:'25 Sep 2026, 17:20'}]
};
