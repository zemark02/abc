import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UserDocuments } from './models/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository extends AbstractRepository<UserDocuments> {
  protected readonly logger = new Logger(UserRepository.name);
  constructor(
    @InjectModel(UserDocuments.name) userModel: Model<UserDocuments>,
  ) {
    super(userModel);
  }
}
