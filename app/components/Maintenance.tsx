import Image from 'next/image';

// TEMPORARY page shown while the website is being reworked (see maintenance.config.ts).
export default function Maintenance() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-base-100">
      <div className="w-full max-w-5xl grid gap-10 md:grid-cols-[2fr_3fr] items-center">
        <div className="mx-auto w-full max-w-xs md:max-w-none">
          <Image
            src="/wartung/franciska-hajdu.jpg"
            alt="Franciska Hajdu mit Violine"
            width={800}
            height={1200}
            priority
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        <div className="text-base-content leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-8">Franciska Hajdu</h1>

          <p className="mb-4">Liebe Besucherinnen und Besucher,</p>
          <p className="mb-4">meine Website wird derzeit überarbeitet und neu gestaltet.</p>
          <p className="mb-6">
            In der Zwischenzeit bin ich selbstverständlich weiterhin persönlich für Sie erreichbar.
            Sie können mich gerne über folgende Kontaktdaten kontaktieren:
          </p>

          <div className="mb-6 space-y-2 border-l-4 border-primary pl-4">
            <p>
              <span className="font-medium">E-Mail:</span>{' '}
              <a className="link link-hover" href="mailto:annafranciska.hajdu@gmail.com">
                annafranciska.hajdu@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Telefon:</span>{' '}
              <a className="link link-hover" href="tel:+4915174453688">
                +49 151 74453688
              </a>
            </p>
          </div>

          <p className="mb-6">
            Vielen Dank für Ihr Verständnis. Ich freue mich, bald die überarbeitete Website mit Ihnen
            teilen zu können!
          </p>

          <p>Herzliche Grüße</p>
          <p className="font-medium">Franciska Hajdu</p>
        </div>
      </div>
    </main>
  );
}
