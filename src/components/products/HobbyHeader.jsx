const HobbyHeader = ({ item }) => {
  return (
    <div className="w-full mb-6 border-b border-b-primary p-4">
      <h1 className="text-left text-3xl mb-4 text-primary">{item.name}</h1>
      <p className="text-xl text-white">{item.description}</p>
    </div>
  );
};

export default HobbyHeader;
