export const formatPrice = (value: string): string => {
  const numericValue = value.replace(/[^0-9]/g, '');

  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
