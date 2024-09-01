"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const createUser_dto_1 = require("./createUser.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(createUser_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=updateUser.dto.js.map