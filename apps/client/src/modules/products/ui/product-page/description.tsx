import { FC } from "react";



interface IProps {
  description: string;
}

export const ProductDescription: FC<IProps> = ({ 
  description 
}) => {



  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Описание</h2>
      <div 
        className="text-gray-700 whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
      />
    </div>
  );
}

function formatDescription(desc: string): string {
  if(!desc) return ""
  return desc
    .replace(/\n/g, '<br />')
    .replace(/\*(.*?)\*/g, '<strong>$1</strong>');
}