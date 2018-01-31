import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Error } from 'tslint/lib/error';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class FirebaseInterceptor implements HttpInterceptor{   

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log('Interceptor used for request', req);
        let clonedRequest = req.clone({headers: req.headers.append('Authorization','Bearer' + environment.firebaseToken)});
        return next.handle(clonedRequest);        
    }

}