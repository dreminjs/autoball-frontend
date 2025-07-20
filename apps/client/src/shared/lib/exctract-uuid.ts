export const extractUUID = (slug: string[]): string | null => {
  if (!slug || slug.length === 0) return null;
  
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const uuidSegment = slug.find(segment => uuidPattern.test(segment));
  
  return uuidSegment || null;
};
