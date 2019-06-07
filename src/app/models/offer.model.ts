export class Offer {
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public picture: string = "ads/April2019/9Yra17GtutakLQZJXTNO.png",
    public company?: string,
    public minAge?: number,
    public maxAge?: number,
    public availableFrom?: Date,
    public availableTo?: Date,
    public sexe?: string,
    public range?: number,
    public date: string = "2019-05-14"
  ) { }
}
