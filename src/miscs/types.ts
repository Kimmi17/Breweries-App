// types.ts

export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2?: string | null;
  address_3?: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude?: string | null;
  latitude?: string | null;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}

export interface BreweryListProps {
  breweries: Brewery[];
}

export interface BreweryCardProps {
  brewery: Brewery;
}
