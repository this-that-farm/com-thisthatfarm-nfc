export interface IAnimal {
  ID: number;
  tagID: number;
  sireID: number | null;
  damID: number | null;
  birthTime: number;
  name: string;
  isMale: boolean;
  isSterile: boolean;
}

const HerdDB: IAnimal[] = [
  {
    ID: 1,
    tagID: 828,
    sireID: null,
    damID: null,
    birthTime: 1108245476000,
    name: 'Gararic Rumble',
    isMale: true,
    isSterile: false,
  },
  {
    ID: 2,
    tagID: 265,
    sireID: null,
    damID: null,
    birthTime: 1213000409000,
    name: 'Heather Burrowes',
    isMale: false,
    isSterile: false,
  },
  {
    ID: 3,
    tagID: 12,
    sireID: 1,
    damID: 2,
    birthTime: 4036220417000,
    name: 'Lanfranc Noakesburrow',
    isMale: true,
    isSterile: true,
  },
  {
    ID: 4,
    tagID: 643,
    sireID: 1,
    damID: 2,
    birthTime: 3056016106000,
    name: 'Bildat Hedgehopper',
    isMale: true,
    isSterile: false,
  },
  {
    ID: 5,
    tagID: 528,
    sireID: 1,
    damID: 2,
    birthTime: 3330304417000,
    name: 'Gouzlim Langham',
    isMale: true,
    isSterile: false,
  },
  {
    ID: 6,
    tagID: 446,
    sireID: 4,
    damID: 8,
    birthTime: 2473990176000,
    name: 'Wandregisilus Bolger-Baggins',
    isMale: false,
    isSterile: false,
  },
  {
    ID: 7,
    tagID: 465,
    sireID: 5,
    damID: 8,
    birthTime: 1126100417000,
    name: 'Isembold Grubb',
    isMale: true,
    isSterile: false,
  },
  {
    ID: 8,
    tagID: 410,
    sireID: null,
    damID: null,
    birthTime: 3551841704000,
    name: 'Erin Bolger',
    isMale: false,
    isSterile: false,
  },
];

export default HerdDB;
