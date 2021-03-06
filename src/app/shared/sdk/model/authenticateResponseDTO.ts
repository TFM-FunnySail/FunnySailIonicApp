/**
 * FunnySail API
 * Api para administración y venta de servicios, actividades y embarcaciones.
 *
 * The version of the OpenAPI document: v1
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface AuthenticateResponseDTO { 
    id?: string | null;
    email?: string | null;
    created?: string;
    updated?: string | null;
    isVerified?: boolean;
    jwtToken?: string | null;
    jwtTokenExpiresIn?: string | null;
    refreshTokenExpiresIn?: string | null;
}

