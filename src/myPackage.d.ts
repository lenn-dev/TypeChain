// 모듈 선언하기 (myPackage.js가 모듈이라 가정하니까)
interface Config {
    url: string;
}
declare module "myPackage" {
    // 모듈안의 init 함수 타입 적어주기
    function init(config:Config):boolean;
    function exit(code:number):number
}