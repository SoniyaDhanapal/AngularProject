export class HeroModel {
  id: number;
  name: string;
}
// export const Developers: HeroModel[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 16, name: 'RubberMan' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

const json_text = ` [
  {
    "id": 1,
    "name": "Jon Doe"
  },
  {
    "id": 2,
    "name": "Pablo Escobar"
  }
]`;
// converting to Object

export const test: HeroModel[] = JSON.parse(json_text);
