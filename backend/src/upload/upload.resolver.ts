import { Resolver, Query } from '@nestjs/graphql';

@Resolver('uploadResolver')
export class UploadResolver {
  @Query(() => String)
  getAllUpload(): string {
    return JSON.stringify([]);
  }
}
