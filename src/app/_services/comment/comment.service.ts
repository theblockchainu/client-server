import { Injectable } from '@angular/core';
import { RequestHeaderService } from '../requestHeader/request-header.service';

import { AppConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {
  public options;

  constructor(private http: HttpClient,
    private config: AppConfig,
    private requestHeaderService: RequestHeaderService) {
    this.options = requestHeaderService.getOptions();
  }
  /**
   * replyToComment
   */
  public replyToComment(commentId, replyBody) {
    return this.http
      .post(this.config.apiUrl + '/api/comments/' + commentId + '/replies', replyBody, this.options);
  }

  /**
   * Add comment upvote
   * @param commentId
   * @param upvoteBody
   * @returns {Observable<any>}
   */
  public addCommentUpvote(commentId, upvoteBody) {
    return this.http
      .post(this.config.apiUrl + '/api/comments/' + commentId + '/upvotes', upvoteBody, this.options);
  }

  /**
   * Add reply upvote
   * @param replyId
   * @param upvoteBody
   * @returns {Observable<any>}
   */
  public addReplyUpvote(replyId, upvoteBody) {
    return this.http
      .post(this.config.apiUrl + '/api/replies/' + replyId + '/upvotes', upvoteBody, this.options);
  }

  /**
   * deleteReply
   */
  public deleteReply(replyId: string) {
    return this.http
      .delete(this.config.apiUrl + '/api/replies/' + replyId, this.options);
  }

  /**
   * deleteComment
   */
  public deleteComment(commentId: string) {
    return this.http
      .delete(this.config.apiUrl + '/api/comments/' + commentId, this.options);
  }

}
