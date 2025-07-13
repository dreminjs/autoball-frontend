import { Messengers } from "./types";

export const getMessangerLink = (
  tel: string,
  messanger?: Messengers,
) => {
  switch (messanger) {
    case 'viber':
      return `viber://chat?number=${tel.replace(/\D/g, '')}`;
    case 'whatsapp':
      return `https://wa.me/${tel.replace('+', '')}`;
    default:
      return `tel:${tel}`;
  }
};
