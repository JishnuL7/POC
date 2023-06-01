import {
    Uuid,
    Result,
    IRepository,
    IStorageProvider,
    IContext,
} from '@coe/apip-api-types';
import { StorageProviderUndefinedError } from '../errors';
import { Constants } from '../models';
import { Ratings } from '../models/rating';

export class RatingRepository implements IRepository<Ratings> {
    storage: IStorageProvider<Ratings>;

    constructor(storageProvider: IStorageProvider<Ratings> | undefined) {
        if (!storageProvider) {
            throw new StorageProviderUndefinedError(
                Constants.errors.repository.rating.storageProvider.undefined.CODE
            )
                .withTitle(
                    Constants.errors.repository.rating.storageProvider.undefined.TITLE
                )
                .withReason(
                    Constants.errors.repository.rating.storageProvider.undefined
                        .MESSAGE
                )
                .toJson();
        }
        this.storage = storageProvider;
    }

    update = (
        id: Uuid,
        resource: Ratings,
        context: IContext
    ): Promise<Result<Ratings>> => this.storage.save(id, resource, context);

    delete = (id: Uuid, context: IContext): Promise<Result<Ratings>> =>
        this.storage.delete(id, context);

    all = (context: IContext): Promise<Result<Ratings>> =>
        this.storage.all(context);

    find = (id: Uuid, context: IContext): Promise<Result<Ratings>> =>
        this.storage.findById(id, context);

    create = (resource: Ratings, context: IContext): Promise<Result<Ratings>> =>
        this.storage.create(resource, context);
}
