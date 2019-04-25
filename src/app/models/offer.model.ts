export class Offer {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public picture: string,
    public company: string,
    public minAge: number,
    public maxAge: number,
    public availableFrom: Date,
    public availableTo: Date,
    public sexe: string,
    public range: number
  ) {}
}
