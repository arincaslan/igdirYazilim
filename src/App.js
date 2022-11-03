import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Talk from 'talkjs';
import MainPage from './Components/MainPage/Mainpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props);
        
        this.inbox = undefined;


    }

    componentDidMount() {
      console.log(this.container);
        // Promise can be `then`ed multiple times
        Talk.ready
            .then(() => {
                const me = new Talk.User({
                    id: "12345231",
                    name: "George Looney",
                    email: "george@looney.net",
                    photoUrl: "https://talkjs.com/docs/img/george.jpg",
                    welcomeMessage: "Hey there! How are you? :-)"
                });

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId:"t0hrIiFI",
                        me: me
                    });
                }

                const other = new Talk.User({
                    id: "54321",
                    name: "Ronald Raygun",
                    email: "ronald@teflon.com",
                    photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
                    welcomeMessage: "Hey there! Love to chat :-)"
                });

                // You control the ID of a conversation. oneOnOneId is a helper method that generates
                // a unique conversation ID for a given pair of users. 
                const conversationId = Talk.oneOnOneId(me, other);
            
                const conversation = window.talkSession.getOrCreateConversation(conversationId);
                conversation.setParticipant(me);
                conversation.setParticipant(other);
            
                this.inbox = window.talkSession.createInbox({
                    selected: conversation
                });
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }

    render() {
        return (
           <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
            </Routes>
            <div style={{height: '500px'}} id="t0hrIiFI" key={"t0hrIiFI"} ref={c => this.container = c}>Loading...</div>
          </BrowserRouter> )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

//  this.container do document.getElementById("YOURID") 