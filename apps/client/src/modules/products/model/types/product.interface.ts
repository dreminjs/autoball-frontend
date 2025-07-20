
export interface DiscDto {
  disc_brand_id?: string;        
  diametr?: string;
  width?: number;
  ejection?: number;
  dia?: number;
  holes?: number;
  pcd?: number;
  model?: string;
}

export interface TireDto {
  season?: 'winter' | 'summer' | 'all_season';
  car_type?: 'passenger' | 'truck' | 'commercial';
  width?: number;
  height?: number;
  model?: string;
  tire_brand_id?: string;       
  residue?: number;
  diametr?: string | null; 
  index?: string;
}
