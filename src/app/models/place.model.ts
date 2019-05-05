import { Marker } from "./marker.model";
export class Place {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public picture: string,
    public latitude: number,
    public longitude: number
  ) {}
}
