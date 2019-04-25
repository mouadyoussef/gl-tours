export class User {
  constructor(
    public id: number,
    public email: string,
    public name: string,
    public description: string,
    public password: string,
    public avatar: string
  ) {}
}
