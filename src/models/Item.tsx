import { Property } from "./Property";

export interface Item {
    guid: string;
    name: string;
    path: string[];
    properties: Property;
}