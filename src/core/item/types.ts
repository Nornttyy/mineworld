export type ItemId = string;

export interface ItemStack {
  item: ItemId;
  count: number;
}

export interface ItemDef {
  id: ItemId;
  name: string;
  maxStack: number;
}
