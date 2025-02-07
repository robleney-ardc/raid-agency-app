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
/**
 * 
 * @export
 * @interface ServicePointUpdateRequest
 */
export interface ServicePointUpdateRequest {
    /**
     * The name of the service point
     * @type {number}
     * @memberof ServicePointUpdateRequest
     */
    id: number;
    /**
     * The name of the service point
     * @type {string}
     * @memberof ServicePointUpdateRequest
     */
    name: string;
    /**
     * The email address of the person responsible for administering the service point.
     * @type {string}
     * @memberof ServicePointUpdateRequest
     */
    adminEmail?: string;
    /**
     * The email address of a technical contact when using the API
     * @type {string}
     * @memberof ServicePointUpdateRequest
     */
    techEmail?: string;
    /**
     * The PID of the institution that will own the RAiDs (currently only RORs are supported).
     * @type {string}
     * @memberof ServicePointUpdateRequest
     */
    identifierOwner: string;
    /**
     * The Datacite repository id. This needs to be created in Fabrica.
     * @type {string}
     * @memberof ServicePointUpdateRequest
     */
    repositoryId?: string;
    /**
     * The prefix used in the handle when minting RAiDs. Assigned when the repository is created.
     * @type {string}
     * @memberof ServicePointUpdateRequest
     */
    prefix?: string;
    /**
     * The password of the repository in Datacite.
     * @type {string}
     * @memberof ServicePointUpdateRequest
     */
    password?: string;
    /**
     * Whether users are able to edit RAiDs in the in the app. This can cause conflicts when also creating/updating RAiDs through the API.
     * @type {boolean}
     * @memberof ServicePointUpdateRequest
     */
    appWritesEnabled?: boolean;
    /**
     * Whether the service point is able to create or update RAiDs
     * @type {boolean}
     * @memberof ServicePointUpdateRequest
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the ServicePointUpdateRequest interface.
 */
export function instanceOfServicePointUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "identifierOwner" in value;

    return isInstance;
}

export function ServicePointUpdateRequestFromJSON(json: any): ServicePointUpdateRequest {
    return ServicePointUpdateRequestFromJSONTyped(json, false);
}

export function ServicePointUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServicePointUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'adminEmail': !exists(json, 'adminEmail') ? undefined : json['adminEmail'],
        'techEmail': !exists(json, 'techEmail') ? undefined : json['techEmail'],
        'identifierOwner': json['identifierOwner'],
        'repositoryId': !exists(json, 'repositoryId') ? undefined : json['repositoryId'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'appWritesEnabled': !exists(json, 'appWritesEnabled') ? undefined : json['appWritesEnabled'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function ServicePointUpdateRequestToJSON(value?: ServicePointUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'adminEmail': value.adminEmail,
        'techEmail': value.techEmail,
        'identifierOwner': value.identifierOwner,
        'repositoryId': value.repositoryId,
        'prefix': value.prefix,
        'password': value.password,
        'appWritesEnabled': value.appWritesEnabled,
        'enabled': value.enabled,
    };
}

