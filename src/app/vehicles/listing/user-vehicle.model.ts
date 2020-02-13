import { ShellModel } from '../../shell/data-store';

export class UserVehicleModel extends ShellModel {
  vehicles: Array<{manufacturer: string, model_name: string, vehicleNo: string, connector_type: string}> = [
    {
      manufacturer: '',
      model_name: '',
      vehicleNo: '',
      connector_type: ''
    },
    {
      manufacturer: '',
      model_name: '',
      vehicleNo: '',
      connector_type: ''
    },
    {
      manufacturer: '',
      model_name: '',
      vehicleNo: '',
      connector_type: ''
    },
    {
      manufacturer: '',
      model_name: '',
      vehicleNo: '',
      connector_type: ''
    }
  ];
  

  constructor() {
    super();
  }
}
