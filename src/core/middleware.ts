type Middleware = (hiling: any, tugon: any, next: () => void) => void;

const mgaMiddleware: Middleware[] = [];

// Add Middleware
export const idagdagMiddleware = (middleware: Middleware): void => {
  mgaMiddleware.push(middleware);
}

// Run middleware data
export const patakbuhinMidleware = (hiling: any, tugon: any, taposNa: () => void): void => {
  let index = -1;

  const next = (): void => {
    index++;
    if(index < mgaMiddleware.length){
      mgaMiddleware[index](hiling, tugon, next);
    } else {
      taposNa();
    }
  }

  next();
}