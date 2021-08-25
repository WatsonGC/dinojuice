export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DocumentData{

}

export interface QuerySnapshot<DocumentData> {
  DocumentData: DocumentData;
}

export interface desktopMode{
  
}

export interface storeEntry{
    StoreNumber: number | null,
    Sequence: number | null,
    Division: number | null,
    DivisionName: string,
    Address: string,
    City: string,
    State: string,
    Zip: string,
    PhoneNumber: string,
    DateOpened: string,
    Latitude: string,
    Longitude: string,
    TimeZoneName: string,
    IsOpen: boolean,
    IsTravelCenter: boolean,
    ValidFrom: string,
    ValidTo: string,
    CreateUser: string,
    County: string,
    AutoMpdCount: number | null,
    TruckMpdCount: number | null,
    IsNsf: boolean
}

export interface storeDropDownObject {
  label: number,
  value: number,
  Address: string,
  City: string,
  State: string
}

export interface storeDropDownObjectInput {
  StoreNumber: number,
  Address: string,
  City: string,
  State: string
}
