import { Marker } from "./marker.model";
export class Place {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public picture: string,
    public location: any,
    public ads: any
  ) {}
}
