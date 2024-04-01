import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import {Request} from "express"

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request: Request = context.switchToHttp().getRequest()
    const creds = request.headers.authorization?.split(" ") ?? []
    if(creds[0] === "Bearer" && creds[1] == "randomtoken"){
      return true
    }
    else
      throw new UnauthorizedException()
  }
}