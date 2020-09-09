import { Machine } from "xstate";

export const contentMachine = Machine({
  id: "content",
  initial: "q0",
  context: {
    question: "q0",
    answer: "",
  },
  states: {
    q0: {
      on: {
        CLICK0: "q01",
        CLICK1: "q02",
        CLICK2: "q03",
      },
    },
    q01: {
      type: "final",
    },
    q02: {
      type: "final",
    },
    q03: {
      type: "final",
    },
  },
});
