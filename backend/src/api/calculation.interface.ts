export interface BaseItem {
    weight: number;
    carbDose: number;
    calculationDateTime: Date;
  }
  export interface Item extends BaseItem {
    id: number;
  }
