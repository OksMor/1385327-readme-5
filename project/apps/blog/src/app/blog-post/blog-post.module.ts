import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { BlogPostRepository } from './blog-post.repository';

@Module({
  controllers: [BlogPostController],
  imports: [],
  providers: [BlogPostService, BlogPostRepository],
})
export class BlogPostModule {}
