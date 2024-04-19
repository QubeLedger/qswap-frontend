import { createStore } from './store';

interface Accordion {
  active: boolean;
  height: string;
  margin: string;
}

const defaultState: Accordion = { active: false, height: '0px', margin: '50px'};

export const [useAccordionStore] = createStore(defaultState);