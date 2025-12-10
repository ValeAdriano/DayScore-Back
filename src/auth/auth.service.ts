import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly prisma: PrismaService) {} //Inject PrismaService

    async signUp(data: SignUpDto) {
    // sign up logic here

    // verify if email is already in use
    const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
    });

    if (existingUser) {
        throw new BadRequestException('Email já está em uso')
    }

    // hash the password
    const passwordHash = await bcrypt.hash(data.password, 10);

    // create the user
    const user = await this.prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            passwordHash,
        },
    })

    const { passwordHash: _, ...result } = user; // remove passwordHash from the returned user object
    return result;

    }
}
