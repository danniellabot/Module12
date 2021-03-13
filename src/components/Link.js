import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return
        }

        event.preventDefault()
        window.history.pushState({}, '', href)
        // this line above changes the state of the page without full rendering 
        // the line below tells that the URL has changed
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
        // we add an event handler in the route component to listen in on event of 'popstate'
    }

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
