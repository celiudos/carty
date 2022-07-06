let stateInicial: IReduxState = {
  usuario: undefined,
};

export default function rootReducer(
  state = stateInicial,
  action: any
): IReduxState {
  state = {
    ...state,
  };

  switch (action.type) {
    case "USUARIO":
      return {
        ...state,
        // usuarioEmailSimulacao: action.valor,
      };
    default:
      return state;
  }
}
