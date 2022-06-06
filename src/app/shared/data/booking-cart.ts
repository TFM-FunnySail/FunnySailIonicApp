import {BoatOutputDTO, ServiceOutputDTO, ActivityOutputDTO} from "../sdk";

interface BoatBookingCartModel{
  requestCaptain:boolean,
  initialDate:string,
  endDate:string,
  boatData:BoatOutputDTO,
};

export interface BookingCartModel {
  services:ServiceOutputDTO[],
  boats: BoatBookingCartModel[],
  activities: ActivityOutputDTO[],
};
