import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

constructor(private inject:Injector){}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let authService = this.inject.get(AuthService);
  let token = req.clone({
    setHeaders: {
      Authorization: `bearer ` + authService.getToken()
    }
  });
  return next.handle(token)
}

}
