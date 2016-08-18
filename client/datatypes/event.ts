export class Event {
  constructor (
  public _id: number,
  public title: string,
  public location: string,
  public time: number, 
  public link?: string,
  public description?: string,  
  public author?: string
  ) { }
}