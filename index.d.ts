/// <reference types="node" />

export declare class StoppableEventEmitter extends EventEmitter {
	emitErrorEvent(event: Error): boolean;
}