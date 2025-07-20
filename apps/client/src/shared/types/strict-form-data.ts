export type StrictFormData<T extends Record<string, string | Blob>> = {
  append: <K extends keyof T>(name: K, value: T[K]) => void;
} & FormData;