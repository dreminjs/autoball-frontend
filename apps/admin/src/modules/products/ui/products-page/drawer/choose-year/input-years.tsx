import { FC, useEffect, useState } from 'react';
import { useChooseYears } from '../../../../model/hooks/use-choose-years';

export const InputYears: FC = () => {
  const { yearFrom, yearTo, onChangeYearFrom, onChangeYearTo } = useChooseYears();
  const [inputFrom, setInputFrom] = useState<string>(yearFrom?.toString() || '');
  const [inputTo, setInputTo] = useState<string>(yearTo?.toString() || '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputFrom(yearFrom?.toString() || '');
    setInputTo(yearTo?.toString() || '');
  }, [yearFrom, yearTo]);

  const validateRange = (from: number | null, to: number | null) => {
    if (from && to && from > to) {
      setError('Год "От" не может быть больше года "До"');
      return false;
    }
    setError(null);
    return true;
  };

  const handleInputChange = (type: 'from' | 'to', value: string) => {
  const numericValue = value.replace(/[^0-9]/g, '');

  if (type === 'from') {
    setInputFrom(numericValue);
    if (numericValue.length === 4) {
      const numValue = parseInt(numericValue);
      if (validateRange(numValue, yearTo ? parseInt(yearTo) : null)) {
        onChangeYearFrom(numericValue);
      }
    } else if (numericValue === '') {
      if (validateRange(null, yearTo ? parseInt(yearTo) : null)) {
        onChangeYearFrom(null);
      }
    }
  } else {
    setInputTo(numericValue);
    if (numericValue.length === 4) {
      const numValue = parseInt(numericValue);
      if (validateRange(yearFrom ? parseInt(yearFrom) : null, numValue)) {
        onChangeYearTo(numericValue);
      }
    } else if (numericValue === '') {
      if (validateRange(yearFrom ? parseInt(yearFrom) : null, null)) {
        onChangeYearTo(null);
      }
    }
  }
};

const handleBlur = (type: 'from' | 'to') => {
  if (type === 'from' && inputFrom.length !== 4) {
    setInputFrom('');
    if (validateRange(null, yearTo ? parseInt(yearTo) : null)) {
      onChangeYearFrom(null);
    }
  } else if (type === 'to' && inputTo.length !== 4) {
    setInputTo('');
    if (validateRange(yearFrom ? parseInt(yearFrom) : null, null)) {
      onChangeYearTo(null);
    }
  }
};

  return (
    <div className="p-2 border-t">
      <div className="flex flex-col gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            От:
          </label>
          <input
            type="text"
            value={inputFrom}
            onChange={(e) => handleInputChange('from', e.target.value)}
            onBlur={() => handleBlur('from')}
            placeholder="Год (4 цифры)"
            maxLength={4}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500 ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            До:
          </label>
          <input
            type="text"
            value={inputTo}
            onChange={(e) => handleInputChange('to', e.target.value)}
            onBlur={() => handleBlur('to')}
            placeholder="Год (4 цифры)"
            maxLength={4}
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