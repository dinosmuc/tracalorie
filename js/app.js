
import { CardState, DefaultState } from './stateModules/defaultState.js';

const cardState = new CardState();


cardState.changeState(new DefaultState());
cardState.updateCard();


 


