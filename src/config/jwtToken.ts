import jwt from 'jsonwebtoken'

export class jwtToken {
    constructor() {
    }

async signin(): Promise<string> {
    const token = await jwt.sign({user},'secret');
    console.log("token",token)
    return token;
}

// async verify(){
    
// }
}

























function user(user: any, arg1: string): string | PromiseLike<string> {
    throw new Error('Function not implemented.');
}
// export interface IPayload {
//     userId: Number,
//     Name: String,
//     mobileNumber: Number,
//     token:String



// export const signin = async (req: Request, res: Response) => {

//     const token: string = jwt.sign({ user}, process.env['JWT_Key'] || 'secret');
//     res.header('auth-token', token).json(token);
// }

// export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.header('token');
//         if (!token) return res.status(401).json('Access Denied');
//         const payload = jwt.verify(token, process.env['JWT_Key'] || 'secret') as IPayload;
//         req.user = payload.Name;
//         next();
//     } catch (e) {
//         res.status(400).send('Invalid Token');
//     }
// }