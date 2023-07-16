import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserDocuments } from './users/models/users.schema';
import {Response} from 'express'
@Injectable()
export class AuthService {

  constructor(private readonly config : ConfigService,private readonly jwtService:JwtService){}

  async login(user:UserDocuments,response:Response){
    const tokenPayload = {
      userId:user._id.toHexString();
    }

    const expires = new Date()
    expires.setSeconds(expires.getSeconds() + this.config.get(
      'JWT_EXPIRATION'
    ))

    const token = this.jwtService.sign(tokenPayload)
  }


   
}
