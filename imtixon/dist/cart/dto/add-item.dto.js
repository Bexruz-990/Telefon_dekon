"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCartDto {
    productId;
    productType;
    name;
    price;
    quantity;
    imageUrl;
}
exports.CreateCartDto = CreateCartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ef8126f2-8d5d-4a21-9d59-28d93e2fd8a7', description: 'Mahsulot IDsi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'smartphone', description: 'Mahsulot turi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCartDto.prototype, "productType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Samsung Galaxy A54', description: 'Mahsulot nomi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCartDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3500000, description: 'Mahsulot narxi (donalik)' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Mahsulot soni' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://cdn.example.com/images/smartphone.jpg',
        description: 'Mahsulot rasmi URL manzili',
    }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCartDto.prototype, "imageUrl", void 0);
//# sourceMappingURL=add-item.dto.js.map