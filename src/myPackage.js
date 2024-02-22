// declaration file 을 설명하고 이해시키기 위해 생성한 js 파일로
// 깃헙과 npm에 누군가 이 코드파일을 push해 두고 우리가 설치했다고 가정해보자
// index.ts 파일에서 myPackage.js파일이 node의 모듈인것처럼 import 해보자
export function init(config){
    return true;
}
export function exit(code){
    return code + 1;
}