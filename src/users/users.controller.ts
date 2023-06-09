import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards } from '@nestjs/common';
import { UserEntity } from './user.entity/user.entity';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {constructor(private service: UsersService) { }


@Get()
getAll(@Param() params) {
    return this.service.getUsers();
}

@Get(':id')
get(@Param() params) {
    return this.service.getUser(params.id);
}

@Post()
create(@Body() user: UserEntity) {
    return this.service.createUser(user);
}

@Put()
update(@Body() user: UserEntity) {
    return this.service.updateUser(user);
}

@UseGuards(AuthGuard('jwt'))
@Delete(':id')
deleteTypeUser(@Param() params) {
    return this.service.deleteUser(params.id);
}}
