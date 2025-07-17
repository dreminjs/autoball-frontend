import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";



export const Info = () => {
  return (
    <div className="mb-3" itemScope itemType="https://schema.org/LocalBusiness">
      <h2 className="sr-only">Контактная информация</h2>
      
      <p className='mb-4 text-xl flex items-center' itemProp="email">
        <FaEnvelope className="mr-2 text-blue-600" aria-hidden="true" />
        Наш email: <a href="mailto:avtobol@mail.ru" className="hover:underline" itemProp="email">avtobol@mail.ru</a>
      </p>
      
      <p className='flex items-center text-xl' itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <FaMapMarkerAlt className="mr-2 text-red-600" aria-hidden="true" />
        <span>
          Наш адрес: 
          <span itemProp="streetAddress"> д. Путришки, ул. Тарханова 35А (Путришки 19)</span>
        </span>
      </p>
    </div>
  );
};