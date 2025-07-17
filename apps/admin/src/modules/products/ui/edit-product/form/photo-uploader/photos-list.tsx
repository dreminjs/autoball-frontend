import { FC } from 'react';
import { Photo } from './photo-uploader';
import { PhotoItem } from './photo-item';

interface IProps {
  photos: Photo[];
  movePhoto: (fromIndex: number, toIndex: number) => void;
  removePhoto: (id: string) => void;
  onPhotoRotate: (id: string, newFile: File, newPreview: string) => void;
}

export const PhotosList: FC<IProps> = ({
  photos,
  movePhoto,
  removePhoto,
  onPhotoRotate,
}) => {
  return (
    <ul>
      {photos.length > 0 && (
        <div className="mt-4 flex flex-wrap">
          {photos.map((photo, index) => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              index={index}
              movePhoto={movePhoto}
              removePhoto={removePhoto}
              onPhotoRotate={!photo.isExisting ? onPhotoRotate : undefined}
            />
          ))}
        </div>
      )}
    </ul>
  );
};
