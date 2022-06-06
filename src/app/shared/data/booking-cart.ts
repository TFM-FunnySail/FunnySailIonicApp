import {ServiceOutputDTO,ActivityOutputDTO} from "../sdk";

export interface BookingCartModel{
  services: ServiceOutputDTO[],
  activities: ActivityOutputDTO[],
}
