/// <reference types="node" />
import { EventEmitter } from 'events';

export declare class StoppableEventEmitter extends EventEmitter {
    emitStoppableEvent(name: string | symbol): boolean;
}


