import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';

@Entity('computers')
export class ComputerProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  cpu: string;

  @Column()
  ram: string;

  @Column()
  storage: string;

  @Column()
  gpu: string;

  @Column()
  screen: string;

  @Column({ default: 0 })
  amount: number;

  @Column()
  battery: string;

  @Column()
  os: string;

@ManyToOne(() => Category, { eager: true })
category: Category;

@ManyToOne(() => Brand, { eager: true })
brand: Brand;

}




@Entity('smartphones')
export class SmartphoneProduct {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  cpu: string;

  @Column()
  screenSize: string;

  @Column()
  mainCamera: string;

  @Column()
  frontCamera: string;

  @Column()
  battery: string;

  @Column()
  storage: string;

  @Column()
  ram: string;

  @Column()
  os: string;

  @Column({ default: 0 })
  amount: number;

  @Column()
  imageUrl: string;

@ManyToOne(() => Category, { eager: true })
category: Category;

@ManyToOne(() => Brand, { eager: true })
brand: Brand;

}




@Entity('headphones')
export class HeadphonesProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  type: string; 

  @Column()
  battery: string;

  @Column()
  noiseCancel: boolean;

  @Column()
  mic: boolean;

  @Column()
  bluetoothVersion: string;

  @Column({ default: 0 })
  amount: number;

  @Column()
  imageUrl: string;

@ManyToOne(() => Category, { eager: true })
category: Category;

@ManyToOne(() => Brand, { eager: true })
brand: Brand;

}




@Entity('smartwatches')
export class SmartwatchProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  screen: string;

  @Column()
  battery: string;

  @Column()
  waterproof: boolean;

  @Column('simple-array')
  healthSensors: string[];

  @Column()
  os: string;

  @Column({ default: 0 })
  amount: number;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Category, { eager: true })
  category: Category;
  
  @ManyToOne(() => Brand, { eager: true })
  brand: Brand;
  
}




@Entity('gamestations')
export class GameStationProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  

  @Column('decimal')
  price: number;

  @Column()
  cpu: string;

  @Column()
  gpu: string;

  @Column()
  storage: string;

  @Column()
  supportsVR: boolean;

  @Column()
  edition: string;

  @Column({ default: 0 })
  amount: number;

  @Column()
  imageUrl: string;

@ManyToOne(() => Category, { eager: true })
category: Category;

@ManyToOne(() => Brand, { eager: true })
brand: Brand;

}





@Entity('other_products')
export class OtherProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column({ nullable: true, type: 'text' })
  description?: string;

  @Column({ default: 0 })
  amount: number;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Brand, { eager: true })
  brand: Brand;

  @ManyToOne(() => Category, { eager: true })
  category: Category;
}