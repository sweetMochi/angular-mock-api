import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { default as mockEndpoints } from './mock.config';

let currentMockEndpoint: { handler: any; };

@Injectable()
export class MockInterceptor implements HttpInterceptor {

	constructor() {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		currentMockEndpoint = mockEndpoints[request.method] && mockEndpoints[request.method][request.url] || null;
		return currentMockEndpoint ? currentMockEndpoint.handler() : next.handle(request);
	}
}
