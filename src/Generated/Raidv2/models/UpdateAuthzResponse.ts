/* tslint:disable */
/* eslint-disable */
/**
 * RAID v2 API
 * This file is where all the endpoint paths are defined, it\'s the \"top level\' of the OpenAPI definition that links all the different files together. The `3.0` in the filename refers to this file being based on OpenAPI 3.0  as opposed to OpenAPI 3.1, which the tooling doesn\'t support yet. The `2.0.0` in the version field refers to the fact that there\'s already  a `1.0.0` used for the legacy RAiD application. Note that swagger ui doesn\'t currently work with our spec,  see https://github.com/swagger-api/swagger-ui/issues/7724 But the spec works fine with openapi-generator tooling. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: contact@raid.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuthzRequestStatus } from './AuthzRequestStatus';
import {
    AuthzRequestStatusFromJSON,
    AuthzRequestStatusFromJSONTyped,
    AuthzRequestStatusToJSON,
} from './AuthzRequestStatus';

/**
 * 
 * @export
 * @interface UpdateAuthzResponse
 */
export interface UpdateAuthzResponse {
    /**
     * 
     * @type {AuthzRequestStatus}
     * @memberof UpdateAuthzResponse
     */
    status: AuthzRequestStatus;
    /**
     * 
     * @type {number}
     * @memberof UpdateAuthzResponse
     */
    authzRequestId?: number;
}

/**
 * Check if a given object implements the UpdateAuthzResponse interface.
 */
export function instanceOfUpdateAuthzResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function UpdateAuthzResponseFromJSON(json: any): UpdateAuthzResponse {
    return UpdateAuthzResponseFromJSONTyped(json, false);
}

export function UpdateAuthzResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAuthzResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': AuthzRequestStatusFromJSON(json['status']),
        'authzRequestId': !exists(json, 'authzRequestId') ? undefined : json['authzRequestId'],
    };
}

export function UpdateAuthzResponseToJSON(value?: UpdateAuthzResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': AuthzRequestStatusToJSON(value.status),
        'authzRequestId': value.authzRequestId,
    };
}

