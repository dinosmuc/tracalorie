
import { CardState, EditState, StepBackState, DefaultState } from './cardStateModule.js';

const cardState = new CardState();


cardState.changeState(new DefaultState());
cardState.updateCard();


 


