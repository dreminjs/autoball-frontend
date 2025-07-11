import { PostProductDto, ProductFormData } from '../types/product.interface';

export const transformPostData = (data: ProductFormData): PostProductDto => {
  const baseDto: Omit<PostProductDto, 'engine' | 'tire' | 'disc'> = {
    OEM: data.OEM,
    car_brand_id: data.car_brand_id,
    car_series_id: data.car_series_id,
    car_part_id: data.car_part_id,
    currency: data.currency,
    discount: data.discount,
    year: data.year,
    type_of_body: data.type_of_body,
    VIN: data.VIN,
    note: data.note,
    description: data.description,
    price: data.price,
    condition: 'used',
    count: data.count,
  };

  switch (data.productType) {
    case 'engine':
      if (data.engine_type && data.gearbox && data.fuel && data.volume) {
        return {
          ...baseDto,
          engine: {
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
        tire: {
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
        disc: {
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
    case 'other': {
      return { ...baseDto };
    }
    default:
      return baseDto as PostProductDto;
  }
};
