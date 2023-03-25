import styled from "styled-components";

export const Container = styled.div`
  background: #f0f2f5;
  min-height: 100vh;

  .bg_contact {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.7);

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
    }
  }

  .cont {
    display: flex;
    justify-content: space-evenly;

    .LCont {
      h1 {
        margin: 2em auto;
        margin-bottom: 0;
        font-size: 1.5rem;
        width: 60%;
        font-weight: 600;
      }

      p {
        margin: 0 auto;
        font-size: 0.8rem;
        width: 60%;
      }
    }

    .RCont {
      width: 40%;

      h1 {
        margin-top: 2em;
        margin-bottom: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .minCont {
        display: flex;
        margin-bottom: 0.5em;
        justify-content: space-between;

        p {
          font-size: 0.7rem;
          margin-top: 1em;
        }
      }

      input {
        background-color: #ffffffbc;
        padding: 0.5em;
        border-radius: 4px;
        width: 18vw;
      }

      .comment {         
         width: 100%;
        p {
          font-size: 0.75rem;
        }

        textarea {
          padding: 0.5em;
          resize: none;
          border-radius: 4px;
          width: 100%;
          height: 25vh;
        }
      }
    }

    button {
      background: #f2be5c;
      border-radius: 4px;
      padding: 1em;
      margin-top: 3em;
    }
  }

  @media (max-width: 850px) {
    .cont {
      display: grid;
      justify-content: space-evenly;

      .LCont {
        h1 {
          margin: 2em auto;
          margin-bottom: 0;
          font-size: 1.5rem;
          width: 60%;
          font-weight: 600;
        }

        p {
          margin: 0 auto;
          font-size: 0.8rem;
          width: 60%;
        }
      }

      .RCont {
        width: 40%;
        margin: 0.5em 0.5em;

        h1 {
          margin: 3em auto;
          margin-bottom: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .minCont {
          display: block;
          margin-bottom: 0.5em;
          justify-content: space-between;

          p {
            font-size: 0.7rem;
            margin-top: 1em;
          }
        }

        input {
          background-color: #ffffffbc;
          padding: 0.5em;
          border-radius: 4px;
          width: 90vw;
        }

        .comment {
          p {
            font-size: 0.75rem;
          }

          input {
            width: 90vw;
            height: 25vh;
          }
        }
      }

      button {
        background: linear-gradient(90deg, #f2be5c 23.7%, #000000 286.13%);
        border-radius: 4px;
        padding: 1em;
        margin-top: 3em;
      }
    }
  }
`;
