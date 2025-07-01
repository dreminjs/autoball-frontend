import { useDrop, useDrag } from 'react-dnd';
import { FC, useRef } from 'react';
import { Photo } from './photo-uploader';

interface IProps {
  photo: Photo;
  index: number;
  movePhoto: (fromIndex: number, toIndex: number) => void;
  removePhoto: (id: string) => void;
  onPhotoRotate: (id: string, newFile: File, newPreview: string) => void;
}

export const PhotoItem: FC<IProps> = ({
  photo,
  index,
  movePhoto,
  removePhoto,
  onPhotoRotate,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const rotateImage = async (degrees: number) => {
    const img = new Image();
    img.src = photo.preview;

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    if (degrees % 180 === 90) {
      canvas.width = img.height;
      canvas.height = img.width;
    } else {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((degrees * Math.PI) / 180);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);

    const newPreview = canvas.toDataURL('image/jpeg');

    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((blob) => resolve(blob!), 'image/jpeg', 0.9)
    );

    const rotatedFile = new File([blob], photo.file.name, {
      type: 'image/jpeg',
      lastModified: Date.now(),
    });
    onPhotoRotate(photo.id, rotatedFile, newPreview);
  };

  const handleRotate = () => {
    rotateImage(90); 
  };

  const [, drop] = useDrop({
    accept: 'PHOTO',
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      movePhoto(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'PHOTO',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`relative w-36 h-36 border rounded-md overflow-hidden m-2 cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <img
        src={photo.preview}
        alt={photo.file.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 flex justify-between p-1">
        <button
          onClick={() => removePhoto(photo.id)}
          className="bg-red-500 text-white border-none rounded px-2 py-1 text-xs cursor-pointer"
        >
          Удалить
        </button>
        <button
          type='button'
          onClick={handleRotate}
          className="bg-blue-500 text-white border-none rounded px-2 py-1 text-xs cursor-pointer ml-1"
        >
          Повернуть
        </button>
      </div>
    </div>
  );
};
