import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/UserModels';
import { UserService } from '../service/UserService';
import jwt from 'jsonwebtoken';
import { jwtToken } from '../config/jwtToken';



export class UserController {
    constructor(private userService: UserService) {
    }

    async userCreate(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userCreate(req.body);
        console.log("control",user)
        let jwt= new jwtToken();
        let data = {user,token: await jwt.signin()}
        res.status(200).send(data);
    }
        
    async userRead(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userRead(req.params.id);
        res.status(200).send(user);
    }
    async userReadAll(req: Request, res: Response):Promise< void > {
        const user: UserModel = await this.userService.userReadAll();
        res.status(200).send(user);
    }
    async userUpdate(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userUpdate(req.params.id, req.body);
        res.status(200).send(user);
    }
    async userDelete(req: Request, res: Response):Promise<UserModel | any > {
        const user: UserModel = await this.userService.userDelete(req.params.id);
        res.status(200).send(user);
    }

}

 // const token =jwt.sign(user,process.env.JWT_Key,{expiresIn:"3 hours"})
        // const token = jwt.sign({userID: user.id}, process.env.JWT_Key, {expiresIn: '2h'});
        // const token: string = jwt.sign({ user}, process.env['JWT_Key'] || 'secret', {
        //     expiresIn: 60 * 60 * 24
        // });
        // res.send({token});
