

export const getComponentBrandType = () => {
  const pathParts = window.location.pathname.split('/');
  return pathParts[pathParts.length - 1];
};