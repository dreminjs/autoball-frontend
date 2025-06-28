import { Actions } from "../actions";



export type ChoosedItem<T> = (T & Actions) | null 