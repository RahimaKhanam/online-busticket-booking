export interface Bus{
    id: number,
    busName: string,
    busTicketFare: number,
    busFromId: number,
    busToId: number,
    busTotalSeats: number,
    busImageUrl: string[] 
}