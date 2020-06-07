import { useEffect, useRef } from 'react';

type HandlerType = {
  current: any
}

export default function useEventListener(eventName: string, handler: any, element = window){
  const savedHandler: HandlerType = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      
      const eventListener = (event: any) => savedHandler.current(event);

      element.addEventListener(eventName, eventListener);
      
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element]
  );
};
