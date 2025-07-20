import { FC, useEffect, useState } from "react";
import { formatPrice, parsePrice } from "@/shared";
import { useChoosePrices } from "@/modules/products/model/hooks/use-choose-prices";


export const InputPrices: FC = () => {
  const { priceFrom, priceTo, onChangePriceFrom, onChangePriceTo } = useChoosePrices();
  const [inputFrom, setInputFrom] = useState<string>(priceFrom || '');
  const [inputTo, setInputTo] = useState<string>(priceTo || '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputFrom(priceFrom || '');
    setInputTo(priceTo || '');
  }, [priceFrom, priceTo]);

  const validateRange = (from: number | null, to: number | null) => {
    if (from && to && from > to) {
      setError('Цена "От" не может быть больше цены "До"');
      return false;
    }
    setError(null);
    return true;
  };

  const handleInputChange = (type: 'from' | 'to', value: string) => {
    const formattedValue = formatPrice(value);
    
    if (type === 'from') {
      setInputFrom(formattedValue);
      const numValue = parsePrice(formattedValue);
      if (validateRange(numValue, parsePrice(priceTo || ''))) {
        onChangePriceFrom(numValue ? formattedValue : null);
      }
    } else {
      setInputTo(formattedValue);
      const numValue = parsePrice(formattedValue);
      if (validateRange(parsePrice(priceFrom || ''), numValue)) {
        onChangePriceTo(numValue ? formattedValue : null);
      }
    }
  };

  const handleBlur = (type: 'from' | 'to') => {
    const formattedFrom = inputFrom.trim();
    const formattedTo = inputTo.trim();

    if (type === 'from' && !formattedFrom) {
      if (validateRange(null, parsePrice(priceTo || ''))) {
        onChangePriceFrom(null);
      }
    } else if (type === 'to' && !formattedTo) {
      if (validateRange(parsePrice(priceFrom || ''), null)) {
        onChangePriceTo(null);
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
            placeholder="Цена"
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
            placeholder="Цена"
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