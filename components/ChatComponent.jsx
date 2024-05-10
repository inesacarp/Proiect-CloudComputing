// /components/ChatComponent.jsx

import React, {useState} from 'react';
import { useRouter } from "next/router";
import MessageBox from "@/components/MessageBox";

function ChatComponent(props) {
	const [chatMessages, setChatMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
	const router = useRouter();

	const filterChatHistory = chatHistory => {
		let filteredChatHistory = [];
		for( let i = 0; i < chatHistory.length; i++ ){
			const currMessage = chatHistory[i];
			const nextMessage = chatHistory[i+1];

			if( i === chatHistory.length - 1 || (currMessage.type !== 'error' && nextMessage?.type !== 'error' && currMessage.role !== nextMessage?.role) ){
				filteredChatHistory.push(currMessage);
			}
		}

		return filteredChatHistory;
	}

	const buildResponseMessageObject = response => {
		let responseMessageObject;

		responseMessageObject = response.data.message;

		return responseMessageObject;
	}

	const handleKeyDown = async (e) => {
		if(e.key === 'Enter'){
			if(userInput.length === 0) {
				return;
			}

			const currentMessageObject = {
				role: 'user',
				content: userInput,
			}

			setChatMessages(prevChatMessages => [...prevChatMessages, currentMessageObject]);
			const currentChatHistory = [...chatMessages, currentMessageObject];
			const filteredChatHistory = filterChatHistory(currentChatHistory);

			try{
                setIsLoading(true);
				const response = await fetch('/api/answer', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						messages: filteredChatHistory,
						type: 'user',
					}),
				});
				const json = await response.json();

                setUserInput('');
				setIsLoading(false);

				const responseMessageObject = buildResponseMessageObject(json);
				setChatMessages(prevChatMessages => [...prevChatMessages, responseMessageObject]);
			}
			catch(error){
				console.log(error);
			}
		}
	}

	return (
		<div className={"w-full max-w-[1500px] mx-auto my-10"}>
			<div className={"border border-b-0 rounded-lg border-gray-300'"}>
				<div className={'border-b text-center px-[20px] py-[10px]'}>
					<span className={'text-md font-bold text-gray-900'}>
						
					</span>
				</div>
				<MessageBox chatMessages={chatMessages}/>
			</div>
			<input
				id={'chat-input'}
				type={'text'}
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                disabled={isLoading}
				className="bg-gray-50 border border-gray-300 border-x-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
				placeholder="Type something..."
				onKeyDown={handleKeyDown}
			/>
			<div className={'text-center text-sm text-gray-500 mt-2'}>
			<button className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => router.push("/")}>
          Homepage
        </button>
			</div>

		</div>
	);
}

export default ChatComponent;