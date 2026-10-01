import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="bg-mist">
      <Container width="narrow" className="py-32 text-center sm:py-44">
        <p className="eyebrow text-link">404</p>
        <h1 className="display-lg mt-4 text-ink">This page has moved on.</h1>
        <p className="lede mx-auto mt-5 max-w-[40ch] text-mute">
          The link may be old or mistyped. The apps and their policies are all still here.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-x-7 gap-y-2 sm:flex-row">
          <ButtonLink href="/">Go to the home page</ButtonLink>
          <ArrowLink href="/legal">Legal centre</ArrowLink>
        </div>
      </Container>
    </main>
  );
}
