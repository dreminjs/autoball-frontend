import { Atom, useAtom } from 'jotai';

export const useCrossStoreAtom = <T,>(globalAtom: Atom<T>) => {
  const [value, setValue] = useAtom(globalAtom);
  return [value, setValue] as const;
};