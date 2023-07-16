import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocuments } from './users/models/users.schema';

const getCurrentUserByContext = (context: ExecutionContext): UserDocuments => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
