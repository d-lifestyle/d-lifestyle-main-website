import axios from "axios";
import { FlightProps } from "../interface";

class FlightServices {
     public async SendRequestForFlight({
          adults,
          departure,
          displayName,
          from,
          returnDate,
          to,
          travelClass,
          child,
          infants,
     }: FlightProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/flight`, {
               adults,
               departure,
               displayName,
               from,
               returnDate,
               to,
               travelClass,
               child,
               infants,
          });
     }
}

const FlightService = new FlightServices();

export default FlightService;
