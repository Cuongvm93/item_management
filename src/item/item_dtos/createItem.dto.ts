import {IsNotEmpty,IsString,MaxLength,IsNumber} from 'class-validator' 
export class createItemDto{
    @IsNotEmpty()
    @IsString({message:'name must be a text'})
    @MaxLength(255)
    name:string;

    @IsNotEmpty()
    @IsNumber()
    price:number;

    
    category:number[];
}