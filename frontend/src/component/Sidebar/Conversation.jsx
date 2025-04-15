import useConversation from "../../zustand/useConversation";

 const Conversation = ({conversation}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = conversation?._id === selectedConversation?._id;

  return (
    <>
      <div onClick={() =>setSelectedConversation(conversation)} className={`flex items-center cursor-pointer hover:bg-blue-500 px-2 rounded-sm md:gap-7 gap-1 border-b py-2 border-slate-400 ${isSelected ? "bg-blue-500" : ""}`}>
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img className="" src={conversation?.profilePic} alt="" />
          </div>
        </div>
        <h2 className="font-normal md:text-lg text-sm">{conversation?.userName}</h2>
      </div>
    </>
  );
};

export default Conversation;
