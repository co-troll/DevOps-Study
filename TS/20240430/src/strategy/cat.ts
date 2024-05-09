/* // 고양이를 3마리를 만들건데
// 울음소리가 다른 고양이
// 사람이 말을 걸면 고양이가 웁니다.
// 야옹, 애옹, 때껄룩

// interface
interface IPersonSay {
    say: string;
}

interface ICatEx {
    existence: boolean;
    message?: string;
}

interface ICatCrying {
    crying(say: IPersonSay) : ICatEx
}

interface ICat {
    [name: string]: ICatCrying
}

// class
class Cat {
    private cat: ICat = {};

    setCat(name: string, cryingSound: ICatCrying) {
        this.cat[name] = cryingSound;
    }

    say(name: string, say: IPersonSay): ICatEx {
        const result = this.cat[name].crying(say);
        return result;
    }
}

class Yaong implements ICatCrying {
    crying(say: IPersonSay): ICatEx {
        console.log("야옹");
        return { existence: true };
    }
}

class Aeong implements ICatCrying {
    crying(say: IPersonSay): ICatEx {
        console.log("애옹");
        return { existence: true };
    }
}
class Waeong implements ICatCrying {
    crying(say: IPersonSay): ICatEx {
        console.log("왜옹");
        return { existence: true };
    }
}

class CatList {
    constructor(private readonly cat: Cat) {}

    say(name: string, say: IPersonSay): ICatEx {
        const result = this.cat.say(name, say);
        return result;
    }
}


class CatCall {
    constructor(private readonly catList: CatList) {}

    say (name: string) {
        const personSay: IPersonSay = {
            say: "야옹아",
        }
        const result = this.catList.say(name, personSay);
        console.log(result);
    }
}

const cat = new Cat();

cat.setCat("야옹이", new Yaong());
cat.setCat("애옹이", new Aeong());
cat.setCat("왜옹이", new Yaong());

const catList = new CatList(cat);

const catCall = new CatCall(catList);

catCall.say("야옹이"); */


interface CatSound {
    sound(): void;
}

abstract class Cat {
    constructor(private readonly catSound: CatSound) {}

    abstract type(): void;

    sound() {
        this.catSound.sound();
    }
}

class 야옹 implements CatSound {
    sound(): void {
        console.log("야옹");
    }
}

class 애옹 implements CatSound {
    sound(): void {
        console.log("애옹");
    }
}

class 왜옹 implements CatSound {
    sound(): void {
        console.log("왜옹");
    }
}

class 샴 extends Cat {
    type(): void {
        console.log("샴")
    }
}

class 때껄룩 extends Cat {
    type(): void {
        console.log("때껄룩");
    }
}

class 삼색이 extends Cat {
    type(): void {
        console.log("삼색고양이");
    }
}

const 나비 = new 샴(new 야옹());
const 껄룩 = new 때껄룩(new 왜옹());
const 애옹이 = new 삼색이(new 애옹());

나비.type();
나비.sound();



