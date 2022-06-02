import {Configuration} from './sdk';

let sdkApiConfigurationFactory = (env:any)=>{
  let returnValue = new Configuration();
  returnValue.basePath = 'https://localhost:44316';

  return returnValue;
};

export let sdkApiConfigurationProvider = {
  provide:Configuration,
  useFactory: sdkApiConfigurationFactory
};
