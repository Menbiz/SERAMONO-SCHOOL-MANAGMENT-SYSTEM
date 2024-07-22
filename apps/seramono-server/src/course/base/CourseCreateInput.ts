/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ClassModelCreateNestedManyWithoutCoursesInput } from "./ClassModelCreateNestedManyWithoutCoursesInput";
import { Type } from "class-transformer";
import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";
import { AttendanceCreateNestedManyWithoutCoursesInput } from "./AttendanceCreateNestedManyWithoutCoursesInput";
import { RegisterCreateNestedManyWithoutCoursesInput } from "./RegisterCreateNestedManyWithoutCoursesInput";

@InputType()
class CourseCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  courseName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  courseCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => ClassModelCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => ClassModelCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => ClassModelCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  classes?: ClassModelCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => EnrollmentCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => EnrollmentCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => EnrollmentCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => AttendanceCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => AttendanceCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => AttendanceCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  attendances?: AttendanceCreateNestedManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => RegisterCreateNestedManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => RegisterCreateNestedManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => RegisterCreateNestedManyWithoutCoursesInput, {
    nullable: true,
  })
  registers?: RegisterCreateNestedManyWithoutCoursesInput;
}

export { CourseCreateInput as CourseCreateInput };
