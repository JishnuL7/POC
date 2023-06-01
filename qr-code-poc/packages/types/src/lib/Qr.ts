import { Uuid, IResource } from '@coe/apip-api-types';
import { Nullable } from './Nullable';

export interface IQr extends IResource {
    id?: Nullable<Uuid>;
    location: string;
    type?:string
}
