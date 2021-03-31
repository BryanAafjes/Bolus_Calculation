export interface BaseItem {
    weight: number;
    carbDose: number;
    calculationDateTime: number;
  }
  export interface Item extends BaseItem {
    id: number;
  }
