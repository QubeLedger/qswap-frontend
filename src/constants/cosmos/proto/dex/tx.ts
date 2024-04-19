/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "core.dex.v1beta1";
export const typeUrlMsgMultiHopSwap = "/core.dex.v1beta1.MsgMultiHopSwap";

export interface MultiHopRoute {
  hops: string[];
}

export interface MsgMultiHopSwap {
  creator: string;
  receiver: string;
  routes: MultiHopRoute[];
  amountIn: string;
  exitLimitPrice: string;
  /**
   * If pickBestRoute == true then all routes are run and the route with the best price is chosen
   * otherwise, the first succesful route is used.
   */
  pickBestRoute: boolean;
}

export interface MsgMultiHopSwapResponse {
}

function createBaseMultiHopRoute(): MultiHopRoute {
  return { hops: [] };
}

export const MultiHopRoute = {
  encode(message: MultiHopRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hops) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiHopRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiHopRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hops.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiHopRoute {
    return { hops: globalThis.Array.isArray(object?.hops) ? object.hops.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: MultiHopRoute): unknown {
    const obj: any = {};
    if (message.hops?.length) {
      obj.hops = message.hops;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiHopRoute>, I>>(base?: I): MultiHopRoute {
    return MultiHopRoute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiHopRoute>, I>>(object: I): MultiHopRoute {
    const message = createBaseMultiHopRoute();
    message.hops = object.hops?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgMultiHopSwap(): MsgMultiHopSwap {
  return { creator: "", receiver: "", routes: [], amountIn: "", exitLimitPrice: "", pickBestRoute: false };
}

export const MsgMultiHopSwap = {
  encode(message: MsgMultiHopSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== "") {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute !== false) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.routes.push(MultiHopRoute.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amountIn = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exitLimitPrice = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.pickBestRoute = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMultiHopSwap {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      routes: globalThis.Array.isArray(object?.routes) ? object.routes.map((e: any) => MultiHopRoute.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? globalThis.String(object.amountIn) : "",
      exitLimitPrice: isSet(object.exitLimitPrice) ? globalThis.String(object.exitLimitPrice) : "",
      pickBestRoute: isSet(object.pickBestRoute) ? globalThis.Boolean(object.pickBestRoute) : false,
    };
  },

  toJSON(message: MsgMultiHopSwap): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.routes?.length) {
      obj.routes = message.routes.map((e) => MultiHopRoute.toJSON(e));
    }
    if (message.amountIn !== "") {
      obj.amountIn = message.amountIn;
    }
    if (message.exitLimitPrice !== "") {
      obj.exitLimitPrice = message.exitLimitPrice;
    }
    if (message.pickBestRoute !== false) {
      obj.pickBestRoute = message.pickBestRoute;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMultiHopSwap>, I>>(base?: I): MsgMultiHopSwap {
    return MsgMultiHopSwap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwap>, I>>(object: I): MsgMultiHopSwap {
    const message = createBaseMsgMultiHopSwap();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.routes = object.routes?.map((e) => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? "";
    message.exitLimitPrice = object.exitLimitPrice ?? "";
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  },
};

function createBaseMsgMultiHopSwapResponse(): MsgMultiHopSwapResponse {
  return {};
}

export const MsgMultiHopSwapResponse = {
  encode(_: MsgMultiHopSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiHopSwapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiHopSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgMultiHopSwapResponse {
    return {};
  },

  toJSON(_: MsgMultiHopSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMultiHopSwapResponse>, I>>(base?: I): MsgMultiHopSwapResponse {
    return MsgMultiHopSwapResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwapResponse>, I>>(_: I): MsgMultiHopSwapResponse {
    const message = createBaseMsgMultiHopSwapResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MultiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse>;
}

export const MsgServiceName = "core.dex.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.MultiHopSwap = this.MultiHopSwap.bind(this);
  }
  MultiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse> {
    const data = MsgMultiHopSwap.encode(request).finish();
    const promise = this.rpc.request(this.service, "MultiHopSwap", data);
    return promise.then((data) => MsgMultiHopSwapResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
