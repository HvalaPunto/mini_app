import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import {constants, Provider, RpcProvider} from 'starknet';


function greet(name: string): string {
    return `Hello, ${name}!`;
}

const result = greet('World');
console.log(result);