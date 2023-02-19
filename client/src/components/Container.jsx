import React from 'react';

const Container = (props) => {
  return (
    <section className={`bg-primary-100 lg:px-24 py-12 ${props.className}`}>
      {props.children}
    </section>
  );
}

export default Container;
