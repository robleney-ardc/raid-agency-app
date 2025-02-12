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
 * data that any member of service-point and operators can see
 * @export
 * @interface ServicePoint
 */
export interface ServicePoint {
    /**
     * 
     * @type {number}
     * @memberof ServicePoint
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ServicePoint
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServicePoint
     */
    identifierOwner: string;
    /**
     * The Datacite repository id. This needs to be created in Fabrica.
     * @type {string}
     * @memberof ServicePoint
     */
    repositoryId?: string;
    /**
     * The prefix used in the handle when minting RAiDs. Assigned when the repository is created.
     * @type {string}
     * @memberof ServicePoint
     */
    prefix?: string;
    /**
     * 
     * @type {string}
     * @memberof ServicePoint
     */
    searchContent?: string;
    /**
     * 
     * @type {string}
     * @memberof ServicePoint
     */
    techEmail: string;
    /**
     * 
     * @type {string}
     * @memberof ServicePoint
     */
    adminEmail: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServicePoint
     */
    enabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ServicePoint
     */
    appWritesEnabled?: boolean;
}

/**
 * Check if a given object implements the ServicePoint interface.
 */
export function instanceOfServicePoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "identifierOwner" in value;
    isInstance = isInstance && "techEmail" in value;
    isInstance = isInstance && "adminEmail" in value;
    isInstance = isInstance && "enabled" in value;

    return isInstance;
}

export function ServicePointFromJSON(json: any): ServicePoint {
    return ServicePointFromJSONTyped(json, false);
}

export function ServicePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServicePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'identifierOwner': json['identifierOwner'],
        'repositoryId': !exists(json, 'repositoryId') ? undefined : json['repositoryId'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'searchContent': !exists(json, 'searchContent') ? undefined : json['searchContent'],
        'techEmail': json['techEmail'],
        'adminEmail': json['adminEmail'],
        'enabled': json['enabled'],
        'appWritesEnabled': !exists(json, 'appWritesEnabled') ? undefined : json['appWritesEnabled'],
    };
}

export function ServicePointToJSON(value?: ServicePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'identifierOwner': value.identifierOwner,
        'repositoryId': value.repositoryId,
        'prefix': value.prefix,
        'searchContent': value.searchContent,
        'techEmail': value.techEmail,
        'adminEmail': value.adminEmail,
        'enabled': value.enabled,
        'appWritesEnabled': value.appWritesEnabled,
    };
}

