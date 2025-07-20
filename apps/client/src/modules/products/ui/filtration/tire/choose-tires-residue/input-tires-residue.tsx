import { useChooseResidueRange } from "@/modules/products/model/hooks/tire/use-tires-residue";
import { FC, useEffect, useState } from "react";

export const InputTiresReside: FC = () => {
  const { residueFrom, residueTo, onChangeResidueFrom, onChangeResidueTo } = useChooseResidueRange();
  const [inputFrom, setInputFrom] = useState<string>(residueFrom?.toString() || '');
  const [inputTo, setInputTo] = useState<string>(residueTo?.toString() || '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputFrom(residueFrom?.toString() || '');
    setInputTo(residueTo?.toString() || '');
  }, [residueFrom, residueTo]);

  const validateRange = (from: number | null, to: number | null) => {
    if (from !== null && to !== null && from > to) {
      setError('Значение "От" не может быть больше "До"');
      return false;
    }
    setError(null);
    return true;
  };

  const handleInputChange = (type: 'from' | 'to', value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    
    if (type === 'from') {
      setInputFrom(numericValue);
      if (numericValue === '') {
        if (validateRange(null, residueTo)) {
          onChangeResidueFrom(null);
        }
      } else {
        const numValue = parseInt(numericValue);
        if (validateRange(numValue, residueTo)) {
          onChangeResidueFrom(numValue);
        }
      }
    } else {
      setInputTo(numericValue);
      if (numericValue === '') {
        if (validateRange(residueFrom, null)) {
          onChangeResidueTo(null);
        }
      } else {
        const numValue = parseInt(numericValue);
        if (validateRange(residueFrom, numValue)) {
          onChangeResidueTo(numValue);
        }
      }
    }
  };

  const handleBlur = (type: 'from' | 'to') => {
    if (type === 'from' && inputFrom === '') {
      onChangeResidueFrom(null);
    } else if (type === 'to' && inputTo === '') {
      onChangeResidueTo(null);
    }
  };

  return (
    <div className="p-2 border-t">
      <div className="flex flex-col gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Остаток от:
          </label>
          <input
            type="text"
            value={inputFrom}
            onChange={(e) => handleInputChange('from', e.target.value)}
            onBlur={() => handleBlur('from')}
            placeholder="Минимальный остаток"
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500 ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Остаток до:
          </label>
          <input
            type="text"
            value={inputTo}
            onChange={(e) => handleInputChange('to', e.target.value)}
            onBlur={() => handleBlur('to')}
            placeholder="Максимальный остаток"
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500 ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
        </div>

        {error && (
          <div className="mt-1 text-sm text-red-600">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};