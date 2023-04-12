import {useCallback, useEffect, useRef, useState} from 'react';
import {useSpring} from '@react-spring/web';

interface IProps {
  duration?: number;
}

const useScrollTop = (props?: IProps) => {
  const targetRef = useRef<any>();
  const isStopped = useRef<boolean>(false);

  const observer = useRef<IntersectionObserver>();
  const [, setY] = useSpring(() => ({y: 0}));
  const [isTargetHidden, setTargetHidden] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (targetRef.current && !observer.current) {
        const onShowScrollTopButton = (entries) => {
          setTargetHidden(!entries[0].isIntersecting);
        };
        observer.current = new IntersectionObserver(onShowScrollTopButton, {threshold: 0});
        observer.current?.observe(targetRef.current);
      }
    }, 0);
  }, []);

  const onWheel = useCallback(() => {
    isStopped.current = true;
    window.removeEventListener('wheel', onWheel);
  }, []);

  const onScroll = () => {
    setY({
      y: 0,
      from: {y: window.scrollY},
      config: {duration: props?.duration || 500},
      onRest: () => {
        isStopped.current = false;
        window.removeEventListener('wheel', onWheel);
      },
      onChange: (_, ctrl) => {
        if (!isStopped.current) {
          window.scroll(0, ctrl.get().y);
        }
      },
    });
  };

  return {targetRef, isTargetHidden, onScroll};
};

export default useScrollTop;
