import { IsString, IsNotEmpty, IsUrl } from "class-validator";

export class createMediaDTO {
    @IsString({ message: "All fields are required!"})
    @IsNotEmpty({ message: "All fields are required!"})
    title: string;

    @IsString({ message: "All fields are required!"})
    @IsNotEmpty({ message: "All fields are required!"})
    @IsUrl()
    username: string;

}