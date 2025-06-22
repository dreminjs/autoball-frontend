
export interface IGetPresignUrlQueryParameters {
  filename: string;
  content_type: string;
}

export interface IPresignUrl {
  url?: string;
}

export type PostPhotoDto = IPresignUrl & { filenames: string[],  files: File[] };
