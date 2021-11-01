import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'WatsonAssistantAgentAppPlugin';

export default class WatsonAssistantAgentAppPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    this.registerReducers(manager);

    console.log('initiating flex plugin...');
    flex.CRMContainer.defaultProps.uriCallback = (task: any) => {
      // Pull the session history from the task attributes
      if (task?.attributes?.sessionHistoryKey) {
        let key = task.attributes.sessionHistoryKey;
        return 'https://web-chat.global.assistant.watson.cloud.ibm.com/loadAgentAppFrame.html?session_history_key='+key;
      }

      return '';
    }
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  private registerReducers(manager: Flex.Manager) {
    if (!manager.store.addReducer) {
      // tslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`);
      return;
    }
  }
}
