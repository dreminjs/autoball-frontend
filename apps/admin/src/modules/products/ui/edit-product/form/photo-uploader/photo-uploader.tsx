import { useState, useRef, useCallback, FC, useEffect, RefObject } from 'react';
import { useFormContext } from 'react-hook-form';
import { ProductFormData } from '../../../../model/schemas/product.schema';
import { PhotosList } from './photos-list';
import { useSetAtom } from 'jotai';
import { deletedPhotosAtom } from '../../../../model/edit-products-atoms-page';

export interface Photo {
  id: string;
  file?: File;
  preview: string;
  rotatedFile?: File;
  existingFileName?: string;
  isExisting?: boolean;
}

interface IProps {
  name: keyof ProductFormData;
  maxFiles?: number;
  isClear: boolean;
  existingPhotos?: string[];
  removedPhotos: RefObject<string[]>
}

export const PhotoUploader: FC<IProps> = ({
  name,
  maxFiles = 10,
  isClear,
  existingPhotos = [],
  removedPhotos
}) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const setDeletedPhotos = useSetAtom(deletedPhotosAtom)

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, setValue } = useFormContext();

  const updateFormValue = useCallback(
    (photosList: Photo[]) => {
      const filesToSubmit: (File | string)[] = photosList.map((photo) => {
        return photo.isExisting ? photo.existingFileName! : photo.file!;
      });

      setValue(name, filesToSubmit.length > 0 ? filesToSubmit : null, {
        shouldValidate: true,
      });
    },
    [setValue]
  );

  useEffect(() => {
    if (existingPhotos.length > 0) {
      setPhotos(() => {
        return existingPhotos.map((photo) => ({
          id: `existing-${photo}`,
          preview: `http://localhost:9000/avtobol/${photo}`,
          existingFileName: photo,
          isExisting: true,
        }));
      });
    }
  }, [existingPhotos, existingPhotos?.length]);

  const handleFiles = useCallback(
    (files: FileList) => {
      const newPhotos: Photo[] = [];
      const filesArray = Array.from(files).slice(0, maxFiles - photos?.length);

      filesArray.forEach((file) => {
        if (!file.type.match('image.*')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
          newPhotos.push({
            id: `${Date.now()}-${file.name}`,
            file,
            preview: e.target!.result as string,
            isExisting: false,
          });

          if (newPhotos.length === filesArray.length) {
            const updatedPhotos = [...photos, ...newPhotos];
            setPhotos(updatedPhotos);
            updateFormValue(updatedPhotos);
          }
        };
        reader.readAsDataURL(file);
      });
    },
    [photos, maxFiles, updateFormValue]
  );

  const movePhoto = useCallback(
    (fromIndex: number, toIndex: number) => {
      setPhotos((prev) => {
        const newPhotos = [...prev];
        const [movedPhoto] = newPhotos.splice(fromIndex, 1);
        newPhotos.splice(toIndex, 0, movedPhoto);
        updateFormValue(newPhotos);
        return newPhotos;
      });
    },
    [updateFormValue]
  );

  const removePhoto = useCallback(
    (name: string) => {
      setDeletedPhotos(prev => [...prev, name])
      setPhotos((prev) => {
        const newPhotos = prev.filter((photo) => photo.existingFileName !== name);
        updateFormValue(newPhotos);
        return newPhotos;
      });
      removedPhotos.current.push(name)
    },
    [updateFormValue]
  );

  const handlePhotoRotate = useCallback(
    (id: string, newFile: File, newPreview: string) => {
      setPhotos((prev) =>
        prev.map((photo) =>
          photo.id === id
            ? {
                ...photo,
                file: newFile,
                preview: newPreview,
                isExisting: false,
              }
            : photo
        )
      );
    },
    []
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

  useEffect(() => {
    if (isClear) {
      setPhotos([]);
    }
  }, [isClear]);

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
          <img className='w-[50px] h-[50px]' src="/upload-file.svg" alt="upload file" />
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Нажмите для загрузки</span> или
            перетащите файлы сюда
          </p>
          <p className="text-xs text-gray-500">
            Поддерживаются изображения (JPG, etc.)
          </p>
        </div>
        <input
          type="file"
          {...register(name)}
          ref={fileInputRef}
          className="hidden"
          multiple
          accept="image/*"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>
      <PhotosList
        photos={photos}
        movePhoto={movePhoto}
        removePhoto={removePhoto}
        onPhotoRotate={handlePhotoRotate}
      />
    </div>
  );
};
