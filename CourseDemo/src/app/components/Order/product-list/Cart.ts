import { ICartVM } from "src/app/ViewModels/icart-vm";

export class Cart implements ICartVM {

  name: string = "";
  count: number = 0;
  price: number = 0;
  total: number = 0;

}
