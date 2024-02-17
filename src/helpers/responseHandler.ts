import { Response } from "express";

type ResponseHandlerType  ={
    res: Response;
    statusCode: number;
    success: boolean;
    msg: string;
    data?: object | string;
}

export const responseHandler = ({res, statusCode, success, msg, data}: ResponseHandlerType) => {
    return res.status(statusCode).json({success, statusCode, msg, data });
}