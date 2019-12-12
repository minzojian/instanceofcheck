import {test} from './index';
import { BadRequestException } from '@nestjs/common';

describe("instanceof", () => {
  it("can work", () => {
    expect(test(new BadRequestException('stuff'))).toBeTruthy();
  });
});
