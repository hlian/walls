import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import * as factory from "./factory";

const LTR = styled.main`
  display: flex;
  height: 100%;
  border: 1px solid red;
`;

const Left = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #aaa;
`;

const Cart = styled.section`
  flex: 1 1 0;
`;

const LeftHeader = styled.header`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const Anchor = styled.a`
  color: ${props => (props.theme.left ? "black" : "white")};
`;

const Header = styled.header`
  height: 3rem;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  align-items: stretch;
  position: relative;
`;

const Name = styled.span`
  flex: 1 1 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Actions = styled.section`
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: stretch;
`;

const PlusAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0084ff;
  padding: 0 12px;
  margin-top: -4px;
  font-size: 24pt;
  text-align: enter;
  font-weight: lighter;
`;

const InfoAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 8px;
  font-family: Times;
  color: #0084ff;
  font-size: 20pt;
  text-align: center;
`;

const Scroll = styled.section`
  flex: 1 1 0;
  overflow: scroll;
  width: 100%;
`;

const Right = styled.main`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const MessageText = styled.p`
  background-color: ${props => (props.theme.left ? "#ececec" : "#0084ff")};
  border-radius: 20px;
  color: ${props => (props.theme.left ? "black" : "white")};
  padding: 6px 18px;

  & + & {
    margin-top: 3px;
  }
`;

const MessageAuthor = styled.p`
  color: #bbb;
  font-size: smaller;
  margin-left: 12px;
  margin-bottom: 3px;
`;

const Message = styled.section`
  flex: 1 1 0;
  align-self: ${props => (props.theme.left ? "flex-start" : "flex-end")};
  max-width: 50%;
  justify-self: center;
  margin-top: 24px;

  &.right ${MessageAuthor} {
    display: none;
  }
`;

const Input = styled.input`
  height: 3rem;
  font-size: 14pt;
  font-family: -apple-system, BlinkMacSystemFont;
  padding: 12px;
  border: 0;
  border-top: 1px solid #e0e0e0;

  &::placeholder {
    color: #ddd;
  }
`;

interface Message {
  left: boolean;
  texts: string[];
  author: string;
  id: number;
}

interface ThreadsState {
  messages: Message[];
}

const bgOf = ({ left }: Message) => (left ? "#f0f0f0" : "#0084ff");

let counter = 0;

const theme = {
  bg: "red"
};

const isLink = (text: string) => text.startsWith("http");

class Threads extends React.Component<{}, ThreadsState> {
  constructor(props: {}) {
    super(props);
    this.state = { messages: factory.messages };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <LTR>
          <Left>
            <LeftHeader>Shopping Cart</LeftHeader>
            <Cart>It's whatever</Cart>
          </Left>
          <Right>
            <Header>
              <Name>10 Crosby St. Roommates Thread</Name>
              <Actions>
                <PlusAction>+</PlusAction>
                <InfoAction>i</InfoAction>
              </Actions>
            </Header>
            <Scroll>
              <Main>
                {this.state.messages.map(message => (
                  <Message
                    key={`${message.id}`}
                    theme={{ left: message.left }}
                    className={message.left ? "left" : "right"}
                  >
                    <MessageAuthor>{message.author || "Tim"}</MessageAuthor>
                    {message.texts.map(text => (
                      <MessageText theme={{ left: message.left }}>
                        {!isLink(text) ? (
                          text
                        ) : (
                          <Anchor theme={{ left: message.left }} href={text}>
                            {text}
                          </Anchor>
                        )}
                      </MessageText>
                    ))}
                  </Message>
                ))}
              </Main>
            </Scroll>
            <Input placeholder="Type a message..." />
          </Right>
        </LTR>
      </ThemeProvider>
    );
  }
}

export default Threads;
