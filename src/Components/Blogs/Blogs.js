import React from "react";

const Blogs = () => {
  return (
    <div className="container text-center">
      <h3>How will you improve the performance of a React Application?</h3>
      <p>
        <li>Use React.Fragment to Avoid Adding Extra Nodes to the DOM</li>
        <li>Use Production Build</li>
        <li>Use React.Suspense and React.Lazy for Lazy Loading Components</li>
        <li>Use React.memo for Component Memoization</li>
        <li>Virtualize a Large List Using react-window</li>
      </p>
      <h3>
        What are the different ways to manage a state in a React application?
      </h3>
      <p>
        React's useState is the best option for local state management. If we
        need a global state solution, the most popular ones are Redux, MobX, and
        built-in Context API. The choice will depend on the size of your
        project, our needs, and our engineers' expertise.
      </p>
      <h3>How does prototypical inheritance work?</h3>
      <p>
        Prototype-based programming is a style of object-oriented programming in
        which behaviour reuse "known as inheritance" is performed via a process
        of reusing existing objects that serve as prototypes. This model can
        also be known as prototypal, prototype-oriented, classless, or
        instance-based programming.
      </p>
      <h3>
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h3>
      <p>
        useState is a Hook (function) that allows you to have state variables in
        functional components. You pass the initial state to this function and
        it returns a variable with the current state value (not necessarily the
        initial state) and another function to update this value.
      </p>
      <h3>What is a unit test? Why should write unit tests?</h3>
      <p>
        This is a type of testing which is done by software developers in which
        the smallest testable module of an application - like functions,
        procedures or interfaces - are tested to ascertain if they are fit to
        use.
      </p>
      <p>
        Unit testing allows software developers to actually think through the
        design of the software and what has to be done before they write the
        code. This can help them to stay focused and can also help them to
        create much better designs.
      </p>
    </div>
  );
};

export default Blogs;
