export const parsePrice = (value: string): number | null => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return numericValue ? parseInt(numericValue) : null;
  };