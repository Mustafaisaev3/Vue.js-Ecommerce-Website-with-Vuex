export default function useOnClickOutside(
    refId,
    handler
) {
    const listener = (event) => {
        const el = document.getElementById(refId)
        if (!el || el.contains((event?.target) || null)) {
          return
        }
        handler(event);
    };
      
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
  
    return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
    };
}