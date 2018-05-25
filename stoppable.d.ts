/// <reference types="node" />

import { EventEmitter } from 'events';

export { Server } from 'http';

export declare class StoppableEventEmitter extends EventEmitter {
    emitErrorEvent(event: Error): boolean;
}

