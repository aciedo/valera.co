import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/test';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
type PageServerParentData = EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;