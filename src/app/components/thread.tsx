import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import * as factory from "./factory";

const LTR = styled.main`
  flex: 1 1 0;
  display: flex;
`;

const Final = styled.footer`
  margin: 1rem 0;
  padding-top: 1rem;
  border-top: 1px solid #ececec;
  text-align: right;
`;

const Root = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Left = styled.section`
  width: 35%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #aaa;
  height: 100%;
  overflow: scroll;
`;

const Good = styled.section`
  & + & {
    margin-top: 12px;
  }
`;

const GoodWrapper = styled.section`
  display: flex;
  align-items: start;
`;
const GoodHeader = styled.section`
    display: flex
    background: #ececec;
    padding: 0.5rem 12px;
    margin: 0 -12px;
    font-weight: bold;
    `;

const GoodName = styled.div`
  flex: 1 1 0;
`;

const GoodQuantity2 = styled.div`
  padding: 0 0.5em;
`;

const GoodQuantity = styled.div`
  margin-top: -9px;
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
`;

const QuantityArrow = styled.div`
  font-size: 8pt;
  margin: -1px 0;
  color: ${props => props.theme.blue};
`;

const QuantityText = styled.div`
  flex: 1 1 0;
  text-align: center;
`;

const GoodDel = styled.div`
  padding-right: 0.75em;
  color: ${props => props.theme.red};
`;

const GoodTotal = styled.div`
  padding-left: 0.5em;
`;

const LeftHeader = styled.header`
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderMain = styled.div``;

const HeaderSub = styled.div`
  text-transform: lowercase;
  font-variant: small-caps;
  font-size: smaller;
  margin-top: 3px;
  background: linear-gradient(to right, orange, yellow, green, cyan, blue, violet);
  letter-spacing: 1px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LeftMain = styled.main`
  padding: 12px;
  flex: 1 1 0;
  font-size: 12pt;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const Anchor = styled.a`
  color: ${props => (props.theme.left ? "black" : "white")};
  &:hover {
    text-decoration: none;
  }
`;

const Header = styled.header`
  height: 4rem;
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

  &:hover {
    cursor: pointer;
  }
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

const MessageText = styled.div`
  background-color: ${props => (props.theme.left ? "#ececec" : "#0084ff")};
  border-radius: 20px;
  color: ${props => (props.theme.left ? "black" : "white")};
  padding: 6px 18px;
  overflow-wrap: break-word;
  float: ${props => (props.theme.left ? "left" : "right")};
  clear: both;

  & + & {
    margin-top: 3px;
  }
`;

const MessageAuthor = styled.div`
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

  &:focus {
    outline: 0;
  }
`;

const Submit = styled.input`
  font-size: 15pt;
  font-family: -apple-system, BlinkMacSystemFont;
  background-color: #00ee31;
  border-radius: 10px;
  padding: 12px;
  color: white;
  border: 1px solid white;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
    border: 1px solid #00de21;
  }

  &:focus {
    outline: 0;
  }
`;

const FB = styled.header`
  background-color: ${props => props.theme.fb};
  height: 3rem;
  color: #fefefe;
  text-align: right;
  font-size: 10pt;
  display: flex;
  align-items: center;
`;

const FBLogoWrapper = styled.section`
  width: 34%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const FBLogo = styled.section`
  background-color: white;
  border-radius: 3px;
  width: 24px;
  padding-right: 1px;
  color: ${props => props.theme.fb};
  font-weight: bold;
  height: 24px;
  display: flex;
  line-height: 20px;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 30px;
`;

const FBActions = styled.section`
  flex: 1 1 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;
  cursor: pointer;
`;

const Divider = styled.div`
  margin: 0 12px;
  display: inline-block;
  border-right: 1px solid #3c5da1;
  height: 20px;
  font-weight: normal;
`;

interface Message {
  left: boolean;
  texts: string[];
  author: string;
  id: number;
}

interface Good {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
}

interface ThreadsState {
  messages: Message[];
  goods: Good[];
  tracking: null | "tracking" | "out";
}

const bgOf = ({ left }: Message) => (left ? "#f0f0f0" : "#0084ff");

let counter = 1000;

const theme = {
  red: "red",
  blue: "#0084ff",
  fb: "#4267b2"
};

const isLink = (text: string) => text.startsWith("http");

const MessageBaby: React.SFC<{ message: Message }> = ({ message }) => (
  <Message theme={{ left: message.left }} className={message.left ? "left" : "right"}>
    <MessageAuthor>{message.author || "Tim"}</MessageAuthor>
    {message.texts.map(text => (
      <MessageText theme={{ left: message.left }} key={text}>
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
);

const GoodBaby: React.SFC<{ good: Good }> = ({ good }) => (
  <Good>
    <p>
      <img src={good.img} height="150" />
    </p>
    <GoodWrapper>
      <GoodDel> X </GoodDel>
      <GoodName>{good.name}</GoodName>
      <GoodQuantity>
        <QuantityArrow>▲</QuantityArrow>
        <QuantityText>{good.quantity}</QuantityText>
        <QuantityArrow>▼</QuantityArrow>
      </GoodQuantity>
      <GoodTotal>${(good.quantity * good.price).toFixed(2)}</GoodTotal>
    </GoodWrapper>
  </Good>
);

const Cart: React.SFC<{ goods: Good[]; tracking: null | "tracking" | "out"; submit: () => void }> = ({ goods, tracking, submit }) => (
  <section>
    <LeftHeader>
      <HeaderMain>Shopping Cart</HeaderMain>
      <HeaderSub>Brought to you by Co.Shop™</HeaderSub>
    </LeftHeader>
    <LeftMain>
      <GoodHeader>
        <GoodDel>X</GoodDel>
        <GoodName>Name</GoodName>
        <GoodQuantity2>Quantity</GoodQuantity2>
        <GoodTotal>Total</GoodTotal>
      </GoodHeader>
      {goods.map(good => (
        <GoodBaby good={good} key={good.id} />
      ))}
      <Final>${goods.reduce((prev, x) => prev + x.price * x.quantity, 0).toFixed(2)}</Final>
      <div style={{ textAlign: "right" }}>
        <Submit type="submit" value="Check Out" onClick={e => submit()} />
      </div>
    </LeftMain>
  </section>
);

const TrackingWrapper = styled.section`
  font-size: 12pt;
  padding: 12px;
`;

const TrackingHeader = styled.section`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const TrackingTimeline = styled.section`
  display: flex;
  height: 7rem;
`;

const TrackingSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const TrackingDot = styled.section`
  position: absolute;
  border-radius: 100pt;
  z-index: 100;
  width: 2rem;
  height: 2rem;
  background-color: ${props => (props.theme.full ? "orange" : "#ececec")};
`;

const TrackingLine = styled.section`
    position: absolute;
    width: 100%;
    background-color: ${props => (props.theme.full ? "orange" : "#ececec")}
    top: 1rem;
    height: 6px;
`;

const TrackingCopy = styled.section`
  position: absolute;
  font-size: 10pt;
  top: 3rem;
`;

const TrackingText = styled.p`
  & span {
    color: green;
    opacity: 0.7;
    font-weight: bold;
  }
  margin-bottom: 2rem;
`;

const Tracking: React.SFC<{ out: boolean; goods: Good[] }> = ({ out, goods }) => (
  <section>
    <LeftHeader>
      <HeaderMain>Shipment Tracking</HeaderMain>
      <HeaderSub>Brought to you by Co.Shop™</HeaderSub>
    </LeftHeader>
    <TrackingWrapper>
      {!out && (
        <section>
          <TrackingHeader>Order Accepted!</TrackingHeader>
          <TrackingText>The history of all previous societies has been the history of class struggles. –Karl Marx</TrackingText>
        </section>
      )}
      <TrackingHeader>Shipping Soon</TrackingHeader>
      <TrackingText>
        Expected delivery: <span>Monday, June 8, 2015</span> by <span>8:00pm</span>
      </TrackingText>
      <TrackingTimeline>
        <TrackingSection>
          <TrackingDot theme={{ full: true }} />
          <TrackingLine theme={{ full: out }} />
          <TrackingCopy>Shipping soon</TrackingCopy>
        </TrackingSection>
        <TrackingSection>
          <TrackingDot theme={{ full: out }} />
          <TrackingLine theme={{ full: out }} />
          <TrackingCopy>Shipped</TrackingCopy>
        </TrackingSection>
        <TrackingSection>
          <TrackingLine theme={{ full: out }} />
          <TrackingCopy>On the way</TrackingCopy>
        </TrackingSection>
        <TrackingSection>
          <TrackingDot theme={{ full: out }} />
          <TrackingLine theme={{ full: out }} />
          <TrackingCopy>Out for delivery</TrackingCopy>
        </TrackingSection>
        <TrackingSection>
          <TrackingDot />
          <TrackingCopy>Delivered</TrackingCopy>
        </TrackingSection>
      </TrackingTimeline>

      <TrackingHeader>Order</TrackingHeader>
      {goods.map(good => (
        <section key={good.id} style={{ marginBottom: "0.5rem" }}>
          <img src={good.img} height="150" />
          <p>
            {good.name} ({good.quantity})
          </p>
        </section>
      ))}
    </TrackingWrapper>
  </section>
);

class Threads extends React.Component<{}, ThreadsState> {
  thomp: HTMLDivElement;
  _input: HTMLInputElement;

  constructor(props: {}) {
    super(props);
    this.state = { messages: factory.messages, goods: factory.goods, tracking: null };
    this.thomp = null as any;
    this._input = null as any;
  }

  componentDidMount() {
    setTimeout(() => {
      this.thomp.scrollIntoView({ behavior: "smooth" });
    }, 10);
    this._input.focus();
  }

  componentDidUpdate() {
    this.thomp.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <FB>
            <FBLogoWrapper>
              <FBLogo>f</FBLogo>
            </FBLogoWrapper>
            <FBActions>
              Hao <Divider /> Home <Divider /> Find Friends <Divider /> Feed Personal Information into Unfeeling Capitalist Behemoth
            </FBActions>
          </FB>
          <LTR>
            <Left>
              {this.state.tracking === null ? <Cart goods={this.state.goods} tracking={null} submit={() => this._submit()} /> : null}
              {this.state.tracking === "tracking" ? <Tracking out={false} goods={this.state.goods} /> : null}
              {this.state.tracking === "out" ? <Tracking out={true} goods={this.state.goods} /> : null}
            </Left>
            <Right>
              <Header>
                <Name>Apt 2A</Name>
                <Actions>
                  <PlusAction>+</PlusAction>
                  <InfoAction>i</InfoAction>
                </Actions>
              </Header>
              <Scroll>
                <Main>
                  {this.state.messages.map(message => (
                    <MessageBaby key={`${message.id}`} message={message} />
                  ))}
                </Main>
                <div
                  style={{ float: "left", clear: "both" }}
                  ref={el => {
                    if (el) this.thomp = el;
                  }}
                />
              </Scroll>
              <Input placeholder="Type a message, @name..." onKeyPress={e => this._keyPress(e)} ref={(e: any) => (this._input = e)} />
            </Right>
          </LTR>
        </Root>
      </ThemeProvider>
    );
  }

  _keyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "]") {
      const state = { ...this.state, tracking: "tracking" as "tracking" };
      this.setState(state);
      return;
    }
    if (e.key === "}") {
      const state = { ...this.state, tracking: "out" as "out" };
      this.setState(state);
      return;
    }
    const authorFromKey = (s: string): string | null => {
      if (s === "Enter") return "Hao";
      if (s === "\\") return "Tim";
      return null;
    };
    const author = authorFromKey(e.key);
    const value = this._input.value;
    if (author && this._input.value.length > 0) {
      const containment = value.startsWith("http");
      const state: ThreadsState = {
        ...this.state,
        messages: coagulate([...this.state.messages, { left: author !== "Hao", author, texts: [this._input.value], id: counter++ }]),
        goods: containment ? [...this.state.goods, factory.secret] : this.state.goods
      };
      this.setState(state, () => {
        console.debug(this._input);
        setTimeout(() => {
          this._input.value = "";
          this.componentDidUpdate();
        }, 10);
      });
    }
  }

  _submit() {
    this.setState({ ...this.state, tracking: "tracking" });
  }
}

const coagulate = (raw: Message[]): Message[] => {
  const messages = [...raw];
  const last = messages.pop();
  if (!last) return raw;
  const same = [last];
  while (messages.length) {
    const next = messages.pop();
    if (next && next.author === last.author) {
      same.unshift(next);
    } else if (next) {
      messages.push(next);
      break;
    }
  }
  const mega: Message = {
    author: same[0].author,
    left: same[0].left,
    texts: [].concat.apply([], same.map(({ texts }) => texts)),
    id: same[0].id
  };
  return messages.concat([mega]);
};

export default Threads;
