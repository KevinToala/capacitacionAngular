import {ItemFactura} from './item-factura';

export interface Factura {
  numeroFactura: string;
  cliente: string;
  anulado: boolean;
  items: ItemFactura[];
}
