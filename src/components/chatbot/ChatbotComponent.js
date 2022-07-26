import React from 'react';

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/Reducers';


 
// Set some properties of the bot
const config = {
    botAvatar: require("./chatBotIcon.png"),
    floating: true,
};

const steps = [
    {
        id: '0',
        message: 'Hi, this is Code-azhagan',
        trigger: '1',
    }, {
        id: '1',
        user:true,
        trigger: '2'
    }, {
        id: '2',
         user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: '4'
    }, {
        id: '4',
        message:"hoho",
    }];


function ChatbotComponent(props) {

    const theme = {
        background: props.backgroundColor,
        headerBgColor: '#007aff',
        headerFontSize: '20px',
        botBubbleColor: '#007aff',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: 'white',
        userFontColor: 'black',
    };
    

    return (
        <>
        <ThemeProvider theme={theme}>

            <ChatBot 

                style={{
                    scrollbars:{visible:false}
                }}
                headerTitle="Code-azhagan"
            
                {...config}
            
                steps={steps}
             />


        </ThemeProvider>
        </>
    );
}

export default connect(mapStateToProps) (ChatbotComponent);