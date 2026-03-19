const Container = ({ children, className }) => {
  return <div className={`${className} bg-white dark:bg-black max-w-6xl mx-auto relative  `}>{children}</div>;
}; 
export default Container;
