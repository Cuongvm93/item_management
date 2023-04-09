import {IsNotEmpty, IsString} from 'class-validator'
export class createCateDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    description:string
}