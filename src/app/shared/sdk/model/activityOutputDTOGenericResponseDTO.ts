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
import { ActivityOutputDTO } from './activityOutputDTO';


export interface ActivityOutputDTOGenericResponseDTO { 
    items?: Array<ActivityOutputDTO> | null;
    limit?: number;
    offset?: number;
    total?: number;
}

