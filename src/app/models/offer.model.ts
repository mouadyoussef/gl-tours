export class Offer {
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public picture: string = "ads/April2019/9Yra17GtutakLQZJXTNO.png",
    public date?: Date,
    public place_id?: string,
    public minAge?: number,
    public maxAge?: number,
    public availableFrom?: Date,
    public sexe?: string,
    public range?: number
  ) {}
}
