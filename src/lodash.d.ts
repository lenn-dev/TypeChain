declare module lodash {
    // head
    function head<T> (array:T[]|null|undefined): T|undefined
    // hasIn
    function hasIn (object:Object,key:string):boolean
    // isBoolean
    function isBoolean<T> (value:T): boolean
    // toString
    function toString<T>(value:T) :string
    // split
    function split(string:string, separator:RegExp|string, limit:number): string[]
    // hasPath
    function hasPath<T>(object:Object, path:T[]|string):boolean
    // filter
    interface Predicate<T> {
        (value:T, index:number, array:T[]):boolean
    }
    function filter<T>(array:T[]|undefined|null, predicate:Predicate<T>): T[]
    // every
    interface Predicate<T> {
        (value: T, index: number, array: T[]): boolean;
    }
    function every<T>(array: T[] | null | undefined, predicate: Predicate<T>): boolean;
    // map
    interface Iteratee<T> {
        (value: T, index: number, array: T[]): T[]
    }
    function map<T>(array:T[], iteratee:Iteratee<T>) :T[]
}

