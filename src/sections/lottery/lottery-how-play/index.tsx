import { Divider } from "@mui/material";
import {
  StyledCriteria,
  StyledPrizeFunds,
  StyledSteps,
  StyledStill,
  StyledWrapper,
} from "./styled";
import Image from "next/image";
import Container from "@/components/container";

const steps = [
  {
    title: "Buy Tickets",
    text: "Prices are set when the round starts, equal to 5 USD in CAKE per ticket.",
  },
  {
    title: "Wait for the Draw",
    text: "There is one draw every day alternating between 0 AM UTC and 12 PM UTC.",
  },
  {
    title: "Check for Prizes",
    text: "Once the round's over, come back to the page and check to see if you've won!",
  },
];

export default function LotteryHowPlay() {
  return (
    <Container>
      <StyledWrapper>
        <StyledSteps>
          <div>How to Play</div>
          <p>
            If the digits on your tickets match the winning numbers in the
            correct order, you win a portion of the prize pool.
            <br />
            Simple!
          </p>

          <div>
            {steps.map(({ title, text }, i) => (
              <div>
                <span>Step {i + 1}</span>
                <div>{title}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </StyledSteps>

        <Divider sx={{ my: "40px" }} />

        <StyledCriteria>
          <div>
            <strong>Winning Criteria</strong>
            <div>
              The digits on your ticket must match in the correct order to win.
            </div>
            <p>Here's an example lottery draw, with two tickets, A and B.</p>
            <p>
              <span />
              Ticket A: The first 3 digits and the last 2 digits match, but the
              4th digit is wrong, so this ticket only wins a “Match first 3”
              prize.
            </p>
            <p>
              <span />
              Ticket B: Even though the last 5 digits match, the first digit is
              wrong, so this ticket doesn't win a prize.
            </p>
            <p>
              Prize brackets don't 'stack': if you match the first 3 digits in
              order, you'll only win prizes from the 'Match 3' bracket, and not
              from 'Match 1' and 'Match 2'.
            </p>
          </div>
          <div></div>
        </StyledCriteria>

        <Divider sx={{ my: "40px" }} />

        <StyledPrizeFunds>
          <div>
            <strong>Prize Funds</strong>
            <p>The prizes for each lottery round come from three sources:</p>
            <div>Ticket Purchases</div>
            <p>
              <span />
              100% of the CAKE paid by people buying tickets that round goes
              back into the prize pools.
            </p>
            <div>Rollover Prizes</div>
            <p>
              <span />
              After every round, if nobody wins in one of the prize brackets,
              the unclaimed CAKE for that bracket rolls over into the next round
              and are redistributed among the prize pools.
            </p>
            <div>CAKE Injections</div>
            <p>
              <span />
              An average total of 35,000 CAKE from the treasury is added to
              lottery rounds over the course of a week. This CAKE is of course
              also included in rollovers! Read more in our guide to{" "}
              <a href="https://docs.pancakeswap.finance/tokenomics/cake/cake-tokenomics">
                CAKE Tokenomics
              </a>
            </p>
          </div>
          <div></div>
        </StyledPrizeFunds>

        <Divider sx={{ my: "40px" }} />

        <StyledStill>
          <Image
            src="/images/lottery/tombola.png"
            width={240}
            height={172}
            alt="Question"
          />
          <div>
            <div>Still got questions?</div>
            <span>
              Check our in-depth guide on{" "}
              <a href="https://docs.pancakeswap.finance/products/lottery/lottery-guide">
                how to play
                <br /> the PancakeSwap lottery!
              </a>
            </span>
          </div>
        </StyledStill>
      </StyledWrapper>
    </Container>
  );
}
