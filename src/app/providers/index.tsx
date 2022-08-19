import compose from "compose-function";
import { withRouter } from "../with-router";
import { withUi } from "../with-ui";
import { withStateManagment } from "../with-stateManagment";

export const withProviders = compose(withRouter, withUi, withStateManagment);