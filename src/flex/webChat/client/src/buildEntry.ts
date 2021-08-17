/**
 * (C) Copyright IBM Corp. 2020.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 */
<<<<<<< HEAD:src/flex/webChat/client/src/buildEntry.ts
import { ServiceDesk, ServiceDeskFactoryParameters } from '../../../../types/serviceDesk';
import { TwilioFlex } from './twilioFlex';
=======
import { ExampleServiceDesk } from './serviceDesks/exampleServiceDesk';
import { GenesysServiceDesk } from './serviceDesks/genesys/genesysServiceDesk';
import { InContactServiceDesk } from './serviceDesks/incontact/inContactServiceDesk';
import { TwilioFlex } from './serviceDesks/twilio/twilioFlex';
import { OracleB2CServiceDesk } from './serviceDesks/oracle/oracleB2CServiceDesk';
import { ServiceDesk, ServiceDeskFactoryParameters } from './types/serviceDesk';
>>>>>>> origin/main:src/buildEntry.ts

/**
 * This file exports the methods used by web chat to communicate back and forth with the service desk. It is exposed
 * as window.WebChatServiceDeskFactory and should be passed into your web chat config as shown in the README.md.
 */
/**
 * A factory to generate a new set of service desk extensions.
 *
 * @param parameters ServiceDeskFactoryParameters passed from web chat into service desk.
 */
function WebChatServiceDeskFactory(parameters: ServiceDeskFactoryParameters): ServiceDesk {
<<<<<<< HEAD:src/flex/webChat/client/src/buildEntry.ts
  return new TwilioFlex(parameters);
=======
  return getInstance(parameters);
}

function getInstance(
  parameters: ServiceDeskFactoryParameters,
): TwilioFlex | ExampleServiceDesk | GenesysServiceDesk | InContactServiceDesk | OracleB2CServiceDesk {
  const serviceDeskClass: string = process.env.SERVICE_DESK_CLASS || 'ExampleServiceDesk';
  const constructors: any = {
    TwilioFlex,
    ExampleServiceDesk,
    GenesysServiceDesk,
    InContactServiceDesk,
    OracleB2CServiceDesk,
  };
  return new constructors[serviceDeskClass](parameters);
>>>>>>> origin/main:src/buildEntry.ts
}

export default WebChatServiceDeskFactory;