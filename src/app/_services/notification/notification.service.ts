import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestHeaderService } from '../requestHeader/request-header.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class NotificationService {

    public key = 'userId';
    public options;
    public now: Date;

    constructor(private http: HttpClient,
        public config: AppConfig,
        private route: ActivatedRoute,
        public router: Router,
        private authService: AuthenticationService,
        private requestHeaderService: RequestHeaderService) {
        this.options = requestHeaderService.getOptions();
        this.now = new Date();
    }

    public getNotifications(userId, options: any, cb) {
        if (userId) {
            this.http
                .get(this.config.apiUrl + '/api/peers/' + userId + '/notifications?' + 'filter=' + options)
                .map((response) => {
                    console.log(response);
                    cb(null, response);
                }, (err) => {
                    cb(err);
                }).subscribe();
        }
    }

    public updateNotification(userId, body: any, cb) {
        if (userId) {
            this.http
                .patch(this.config.apiUrl + '/api/notifications/' + body.id, body, this.options)
                .map((response) => {
                    console.log(response);
                    cb(null, response);
                }, (err) => {
                    cb(err);
                }).subscribe();
        }
    }



}
