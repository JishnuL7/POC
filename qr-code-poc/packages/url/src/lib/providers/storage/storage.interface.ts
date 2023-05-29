import { IResource } from './Data';
import { Result } from './result';
import { Uuid } from '../../errors/id';

export interface IContext{
    set<T>(key: string, value: T): void;
    get<T>(key: string): T | undefined;
}

export interface IStorageProvider<T extends IResource> {
  all(context: IContext): Promise<Result<T>>;
  create(entity: T, context: IContext): Promise<Result<T>>;
  delete(id: Uuid, context: IContext): Promise<Result<T>>;
  findById(id: Uuid, context: IContext): Promise<Result<T>>;
  save(id: Uuid, entity: T, context: IContext): Promise<Result<T>>;
}