import { EditProductFormData } from '../schemas/product.schema';
import { EditProductDto, } from '../types/product.interface';

export const transformEditData = (data: EditProductFormData): EditProductDto => {
  console.log(data)
  const baseDto: Omit<EditProductDto, 'engine' | 'tire' | 'disc'> = {
    OEM: data.OEM || "",
    car_brand_id: data.car_brand_id,
    car_series_id: data.car_series_id,
    car_part_id: data.car_part_id,
    currency: data.currency || "USD",
    discount: data.discount,
    year: data.year || 1999 ,
    VIN: data.VIN,
    note: data.note,
    description: data.description,
    price: data.price || 100,
    condition: 'used',
    count: data.count || 1,
    details: null,
    ...(data.type_of_body && { type_of_body: data.type_of_body }),
  };

  switch (data.productType) {
    case "engine":
      if (data.engine_type && data.gearbox && data.fuel && data.volume) {
        return {
          ...baseDto,
          details: {
            engine_type: data.engine_type,
            gearbox: data.gearbox,
            fuel: data.fuel,
            volume: data.volume,
          },
        };
      } else {
        return { ...baseDto };
      }

    case 'tire':
      return {
        ...baseDto,
        details: {
          season: data.tires_season,
          car_type: data.tires_car_type,
          width: data.tires_width,
          height: data.tires_height,
          model: data.tires_model,
          tire_brand_id: data.tire_brand_id,
          residue: data.tires_residue,
          diametr: data.tires_diametr === 'null' ? null : data.tires_diametr,
          index: data.tires_index,
        },
      };

    case 'disc':
      return {
        ...baseDto,
        details: {
          disc_brand_id: data.disc_brand_id,
          diametr: data.disc_diametr,
          width: data.disc_width,
          ejection: data.disc_ejection,
          dia: data.disc_dia,
          holes: data.disc_holes,
          pcd: data.disc_pcd,
          model: data.disc_model,
        },
      };
    default:
      return baseDto as EditProductDto;
  }
};
