
import { useDrop, useDrag } from 'react-dnd';
import { Photo } from './photo-uploader';
import { FC, useRef } from 'react';

interface IProps {
  photo: Photo;
  index: number;
  movePhoto: (fromIndex: number, toIndex: number) => void;
  removePhoto: (id: string) => void;
}

export const PhotoItem:FC<IProps> = ({ photo, index, movePhoto, removePhoto }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'PHOTO',
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
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
      </div>
    </div>
  );
};