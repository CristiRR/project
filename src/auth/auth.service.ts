// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  ValidateUser(email: string, password: string){
    if(email =="admin@api.com" && password == '123'){
      return {id: 1, email}
    }
    return null;
  }

  login(user: any) {
    const payload = { username: user.email, sub: user.userId, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}



//Capa de neg que es valido y no es valido 