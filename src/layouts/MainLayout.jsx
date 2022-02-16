const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col items-center z-10 main-container">
      {children}
    </main>
  );
};

export default MainLayout;
