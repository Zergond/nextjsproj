import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">text</Htag>
      <Htag tag="h2">text</Htag>
      <Htag tag="h3">text</Htag>
      <Button appearance="primary" arrow="down">
        text
      </Button>
      <Button appearance="ghost" arrow="down">
        text
      </Button>
      <P size="small">small</P>
      <P size="medium">medium</P>
      <P size="large">large</P>
    </>
  );
}
