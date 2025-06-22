


export type ChoosedItem<T> = (T & { type: 'delete' | 'edit' }) | null 