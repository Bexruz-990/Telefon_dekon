import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Brand } from '../brands/entities/brand.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Brand, (brand) => brand.category, { cascade: true })
  brands: Brand[];
  smartphones: any;
}
