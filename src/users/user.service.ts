import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  update(id: number, dto: UpdateUserDto) {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  // Find one user by ID
  async findById(id: number): Promise<User> {
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  // Find by email for login/register
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.usersRepo.findOne({ where: { email } });
    return user ?? undefined;
  }

  // Create user
  async create(email: string, hashedPassword: string): Promise<User> {
    const user = this.usersRepo.create({ email, password: hashedPassword });
    return this.usersRepo.save(user);
  }

  // Find all users (optional for admin)
  findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  // Delete user by ID (optional)
  async remove(id: number): Promise<{ success: boolean }> {
    const result = await this.usersRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return { success: true };
  }
}
