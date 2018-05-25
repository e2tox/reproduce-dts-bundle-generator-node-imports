/// <reference types="node" />

import { EventEmitter } from 'events';

export declare class StoppableEventEmitter extends EventEmitter {
	emitErrorEvent(event: Error): boolean;
}