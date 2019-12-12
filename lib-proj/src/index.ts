import { BadRequestException } from "@nestjs/common";
export const test = error => {
  let a = error;
  let b = BadRequestException;
  console.log(a instanceof b);
  console.log(error instanceof BadRequestException);
  console.log(Reflect.getPrototypeOf(error));
  console.log(Reflect.getPrototypeOf(error) === BadRequestException);
  console.log("end");

  return error instanceof BadRequestException;
};
