
import { useState, useRef, useCallback, FC } from 'react';
import { PhotoItem } from './photo-item';

export type Photo = {
  id: string;
  file: File;
  preview: string;
};

interface IProps {
  onPhotosChange: (photos: Photo[]) => void;
};

export const PhotoUploader: FC<IProps> = ({ onPhotosChange }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (files: FileList) => {
      const newPhotos: Photo[] = [];

      Array.from(files).forEach((file) => {
        if (!file.type.match('image.*')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
          newPhotos.push({
            id: `${Date.now()}-${file.name}`,
            file,
            preview: e.target!.result as string,
          });

          if (newPhotos.length === files.length) {
            const updatedPhotos = [...photos, ...newPhotos];
            setPhotos(updatedPhotos);
            onPhotosChange(updatedPhotos);
          }
        };
        reader.readAsDataURL(file);
      });
    },
    [photos, onPhotosChange]
  );

  const movePhoto = useCallback(
    (fromIndex: number, toIndex: number) => {
      setPhotos((prev) => {
        const newPhotos = [...prev];
        const [movedPhoto] = newPhotos.splice(fromIndex, 1);
        newPhotos.splice(toIndex, 0, movedPhoto);
        onPhotosChange(newPhotos);
        return newPhotos;
      });
    },
    [onPhotosChange]
  );

  const removePhoto = useCallback(
    (id: string) => {
      setPhotos((prev) => {
        const newPhotos = prev.filter((photo) => photo.id !== id);
        onPhotosChange(newPhotos);
        return newPhotos;
      });
    },
    [onPhotosChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files.length) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Фотографии товара
      </label>
      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
      >
        <div className="flex flex-col items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-400 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Нажмите для загрузки</span> или
            перетащите файлы сюда
          </p>
          <p className="text-xs text-gray-500">
            Поддерживаются изображения (JPG, PNG, etc.)
          </p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          accept="image/*"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>

      {photos.length > 0 && (
        <div className="mt-4 flex flex-wrap">
          {photos.map((photo, index) => (
            <PhotoItem
              key={photo.id}
              photo={photo}
              index={index}
              movePhoto={movePhoto}
              removePhoto={removePhoto}
            />
          ))}
        </div>
      )}
    </div>
  );
};