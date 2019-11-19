import { TxTemplate } from '../types/txTemplate';
import { State } from '../core/state';
import { TypeConverter } from '../types/typeConverter';

export interface TxBuilder {
    txConfig: any;
    isReadyToRun(): boolean;
    isWaiting():boolean
    run(): Promise<any>; // async
    on(event: string, callback: Function): void; // for running of new state machine
}

export interface TxBuilderConstructor {
    GLOBAL_NAME: string;
    new (txTemplate: TxTemplate, state: State, typeConverter: TypeConverter): TxBuilder;
}