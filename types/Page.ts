export interface imageBreedType {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: infoBreedType[]
}
export interface infoBreedType {
    id: string;
    name: string;
    description: string
}