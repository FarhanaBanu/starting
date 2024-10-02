// @ts-nocheck
const heading = React.createElement('h1', {}, 'Hello world!!!!!');
const eleRef = document.getElementById('root');
if (eleRef) {
  const root = ReactDOM.createRoot(eleRef);
  root.render(heading);
}
