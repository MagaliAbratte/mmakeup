import type { LandingPageData } from "@/content/landing";

type BookingSectionProps = {
  booking: LandingPageData["booking"];
};

export function BookingSection({ booking }: BookingSectionProps) {
  return (
    <section id="reservas" className="bg-white py-12 sm:py-16">
      <div className="container">
        <div className="mb-9 max-w-4xl text-center sm:mx-auto sm:mb-11">
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl">
            {booking.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{booking.description}</p>
        </div>

        <ul className="mx-auto max-w-5xl divide-y divide-border border-y border-border text-left">
          {booking.items.map((item) => (
            <li
              key={item}
              className="py-5 text-sm leading-7 text-foreground transition-all duration-500 ease-out hover:bg-muted/35 sm:px-5 sm:hover:px-7"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
