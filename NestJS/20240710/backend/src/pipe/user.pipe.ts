import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

export class UserNamePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        // 파이프 선언하고 호출하면
        // value에 값이 입력값이 할당된다. @Body('index', userNamePipe) // value
        // Body에서 구조분해 할당해서 할당해준 index가 value
        // metadata : 데이터를 설명하는 데이터
        // metadata : { metatype: [function: number], type: "body", data: "index" }
        console.log(metadata);
        console.log(typeof value);
        console.log(isNaN(value));
        if (isNaN(value)) {
            // BadRequestException 에러 발생 응답 메시지를 응답할때 메시지 내용을 추가해서 객체 생성
            throw new BadRequestException("데이터 타입이 문자형으로 params에 전달했어")
        }
        return parseInt(value);
    }
}

export class IsString implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        const check = value.split("").every((el: any) => {
            return isNaN(el);
        })
        if (!check) {
            throw new BadRequestException("이름에 숫자가 포함되면 안됩니다");
        } 
        return value;
    }
}

export class UserNameMinCount implements PipeTransform {
    count: number;
    constructor(count: number = 3) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length < (this.count)) {
            throw new BadRequestException(`최소 ${this.count}자 이상 이름을 작성해라`);
        }
        return value;
    }
}

export class UserNameMaxCount implements PipeTransform {
    count: number;
    constructor(count: number = 5) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length > this.count) {
            throw new BadRequestException(`최대 ${this.count}자 미만 이름을 작성해라`);
        }
        return value;
    }
}

export class UserLoginObjectPipe implements PipeTransform {
    // 객체의 형태를 생성자에서 받고

    constructor(private userDTOBody: ZodSchema) {}
    transform(value: any, metadata: ArgumentMetadata) {
        try {
            const { name, age } = value;
            const parseValue = this.userDTOBody.parse({ name, age: parseInt(age) });
            return parseValue;
        } catch (error) {
            console.log(error);
            throw new BadRequestException("user login DTO err");
        }
    }
}