import { InjectionToken } from "@angular/core";
import { MsalConfig } from "./msal-config";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";
import { UserAgentApplication, CacheResult, User, Logger } from "msal";
import { Router } from "@angular/router";
import { BroadcastService } from "./broadcast.service";
export declare const MSAL_CONFIG: InjectionToken<string>;
export declare class MsalService extends UserAgentApplication {
    private config;
    private router;
    private broadcastService;
    user: any;
    _oauthData: {
        isAuthenticated: boolean;
        userName: string;
        loginError: string;
        idToken: {};
    };
    loginScopes: string[];
    _renewActive: boolean;
    constructor(config: MsalConfig, router: Router, broadcastService: BroadcastService);
    updateDataFromCache(scopes: string[]): void;
    private processHash;
    private processRedirectCallBack;
    private isUnprotectedResource;
    private isEmpty;
    private authCallback;
    protected clearCache(): void;
    getLogger(): Logger;
    getCacheStorage(): any;
    isCallback(hash: string): boolean;
    loginRedirect(consentScopes?: string[], extraQueryParameters?: string): void;
    loginPopup(consentScopes?: string[], extraQueryParameters?: string): Promise<any>;
    logout(): void;
    getCachedTokenInternal(scopes: any): CacheResult;
    acquireTokenSilent(scopes: Array<string>, authority?: string, user?: User, extraQueryParameters?: string): Promise<any>;
    acquireTokenPopup(scopes: Array<string>, authority?: string, user?: User, extraQueryParameters?: string): Promise<any>;
    acquireTokenRedirect(scopes: Array<string>, authority?: string, user?: User, extraQueryParameters?: string): void;
    loginInProgress(): boolean;
    getUser(): User;
    getScopesForEndpoint(endpoint: string): string[];
    clearCacheForScope(accessToken: string): void;
    info(message: string): void;
    verbose(message: string): void;
    removeItem(key: string): void;
}
