import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'downloadFile' : ActorMethod<[bigint], [] | [Uint8Array | number[]]>,
  'getUserFiles' : ActorMethod<[], Array<[bigint, Uint8Array | number[]]>>,
  'uploadFile' : ActorMethod<[bigint, Uint8Array | number[]], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
