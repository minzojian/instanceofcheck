import { BadRequestException } from '@nestjs/common';
import { test } from 'lib-proj';
test(new BadRequestException('it is a test error'));
