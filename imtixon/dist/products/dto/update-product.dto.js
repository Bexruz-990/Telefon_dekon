"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOtherProductDto = exports.UpdateGameStationDto = exports.UpdateSmartwatchDto = exports.UpdateHeadphonesDto = exports.UpdateSmartphoneDto = exports.UpdateComputerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_dto_1 = require("./create-product.dto");
class UpdateComputerDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateComputerDto) {
}
exports.UpdateComputerDto = UpdateComputerDto;
class UpdateSmartphoneDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateSmartphoneDto) {
}
exports.UpdateSmartphoneDto = UpdateSmartphoneDto;
class UpdateHeadphonesDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateHeadphonesDto) {
}
exports.UpdateHeadphonesDto = UpdateHeadphonesDto;
class UpdateSmartwatchDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateSmartwatchDto) {
}
exports.UpdateSmartwatchDto = UpdateSmartwatchDto;
class UpdateGameStationDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateGameStationDto) {
}
exports.UpdateGameStationDto = UpdateGameStationDto;
class UpdateOtherProductDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateOtherProductDto) {
}
exports.UpdateOtherProductDto = UpdateOtherProductDto;
//# sourceMappingURL=update-product.dto.js.map