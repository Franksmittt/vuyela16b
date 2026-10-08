import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const chain = [
  {
    title: 'Receive',
    text: 'Bulk is received and stockpiled at the Elandsfontein yard.',
  },
  {
    title: 'Pack',
    text: 'On order, it is bagged or packed into 6 m and 12 m containers.',
  },
  {
    title: 'Weigh',
    text: 'The cargo is weighed on the SOLAS weighbridges.',
  },
  {
    title: 'Rail',
    text: 'Vuyela trucks, running in Gauteng, deliver containers to Transnet Freight Rail.',
  },
  {
    title: 'Road',
    text: 'Containers that go by road are taken to Durban.',
  },
  {
    title: 'Ship',
    text: 'Vuyela books the vessel, clears the cargo, and keeps it on schedule.',
  },
];

const proof = [
  'SARS bonded warehouse',
  'SOLAS weighbridges',
  'NOSA',
  '24/7 operations',
  'Yard cameras',
];

export default function HomePageClient() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vuyela.com/#website',
    name: 'Vuyela Group',
    url: 'https://vuyela.com',
    description:
      'Elandsfontein yard for chrome and bulk. Containers onto rail, by road. Vuyela Logistics stores, packs, weighs, books, and stays on schedule.',
    publisher: {
      '@id': 'https://vuyela.com/#organization',
    },
    inLanguage: 'en-ZA',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vuyela.com',
      },
    ],
  };

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col w-full bg-[#141414] text-[#F4F1EA]">
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-end overflow-hidden bg-[#141414]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero_1.jpg"
              alt="Vuyela truck loaded with bulk at the Elandsfontein yard"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              quality={80}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-[#141414]/25" />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-16 pt-28 md:pb-20">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.92] tracking-tight text-white">
              Locally Invested.
              <br />
              <span className="text-[#FFD700]">Globally Connected.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#F4F1EA]">
              Elandsfontein. Chrome and bulk in. Containers onto rail, by road.
              Vuyela Logistics stores, packs, weighs, books, and stays on
              schedule.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center bg-[#FFD700] px-6 text-sm font-semibold tracking-wide text-[#141414] hover:bg-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#chain"
                className="text-sm font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-[#FFD700]"
              >
                How a box leaves
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex flex-wrap gap-x-6 gap-y-2">
            {proof.map((item) => (
              <Link
                key={item}
                href="/facilities"
                className="text-sm text-[#F4F1EA]/80 hover:text-[#FFD700] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </section>

        <section
          id="chain"
          className="max-w-6xl mx-auto w-full px-6 sm:px-8 py-20 md:py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
                How cargo leaves Elandsfontein
              </h2>
            </div>
            <ol className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
              {chain.map((step, index) => (
                <li key={step.title} className="grid grid-cols-12 gap-4 py-5">
                  <span className="col-span-2 sm:col-span-1 font-serif text-[#FFD700] text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="col-span-10 sm:col-span-3 text-white font-medium">
                    {step.title}
                  </span>
                  <span className="col-span-12 sm:col-span-8 text-[#A3A3A3] leading-relaxed">
                    {step.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <figure className="w-full">
          <div className="relative w-full h-[52vh] min-h-80">
            <Image
              src="/images/home-facility-aerial.png"
              alt="Aerial view of the Vuyela yard at Elandsfontein"
              fill
              className="object-cover"
              sizes="100vw"
              quality={75}
            />
          </div>
          <figcaption className="max-w-6xl mx-auto px-6 sm:px-8 py-4 text-sm text-[#A3A3A3]">
            Elandsfontein. The yard where chrome and bulk are held, packed, and
            weighed.
          </figcaption>
        </figure>

        <section id="work" className="bg-[#F4F1EA] text-[#141414]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight max-w-xl">
              The work
            </h2>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-[#141414]/15 pt-10">
              <div className="lg:col-span-7">
                <p className="text-sm tracking-wide text-[#141414]/60">Bulk</p>
                <h3 className="font-serif text-3xl mt-2">
                  Store it. Pack it. Weigh it.
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#141414]/80">
                  Chrome concentrate and ROM, then manganese, iron ore, coal,
                  ferrochrome, ferromanganese, and bagged cargo. Held on site,
                  bagged when the order needs it, and packed into 6 m and 12 m
                  containers.
                </p>
                <Link
                  href="/services/bulk"
                  className="inline-block mt-5 text-sm font-medium underline decoration-[#141414]/30 underline-offset-4 hover:decoration-[#141414]"
                >
                  Vuyela Bulk
                </Link>
              </div>
              <div className="relative lg:col-span-5 min-h-64">
                <Image
                  src="/images/home-service-bulk.png"
                  alt="Bulk stockpile and handling at Vuyela"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={75}
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#141414]/15 pt-10">
              <div>
                <p className="text-sm tracking-wide text-[#141414]/60">
                  Gauteng fleet and rail
                </p>
                <h3 className="font-serif text-3xl mt-2">
                  Own trucks to the rail
                </h3>
                <p className="mt-4 leading-relaxed text-[#141414]/80">
                  Vuyela’s trucks run in Gauteng. They load containers and bulk,
                  and they deliver containers to Transnet Freight Rail.
                </p>
                <Link
                  href="/services/logistics"
                  className="inline-block mt-5 text-sm font-medium underline decoration-[#141414]/30 underline-offset-4 hover:decoration-[#141414]"
                >
                  Vuyela Logistics
                </Link>
              </div>
              <div>
                <p className="text-sm tracking-wide text-[#141414]/60">
                  Ocean freight
                </p>
                <h3 className="font-serif text-3xl mt-2">
                  Booked through to arrival
                </h3>
                <p className="mt-4 leading-relaxed text-[#141414]/80">
                  Vuyela books the shipment, clears customs, keeps the
                  documents, and stays on schedule until the container arrives.
                </p>
                <Link
                  href="/services/freight"
                  className="inline-block mt-5 text-sm font-medium underline decoration-[#141414]/30 underline-offset-4 hover:decoration-[#141414]"
                >
                  Vuyela Freight
                </Link>
              </div>
            </div>

            <p className="mt-12 border-t border-[#141414]/15 pt-6 text-[#141414]/80">
              50ppm diesel is supplied from the same site.{' '}
              <Link
                href="/services/refuel"
                className="underline decoration-[#141414]/30 underline-offset-4 hover:decoration-[#141414]"
              >
                Vuyela Refuel
              </Link>
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto w-full px-6 sm:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <h2 className="md:col-span-4 font-serif text-4xl text-white">
              In the yard
            </h2>
            <div className="md:col-span-8 max-w-xl">
              <p className="text-lg leading-relaxed text-[#F4F1EA]/85">
                Jaco Nagel and Wayne Johnson are on site. The people who make
                the promise are the people in the yard.
              </p>
              <Link
                href="/about"
                className="inline-block mt-5 text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#FFD700]"
              >
                The company
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-[#A3A3A3]">Yard</p>
              <p className="mt-2 text-lg leading-relaxed">
                83 Main Reef Road
                <br />
                Elandsfontein, Germiston 1601
              </p>
            </div>
            <div>
              <p className="text-sm text-[#A3A3A3]">Write</p>
              <a
                href="mailto:info@vuyelalogistics.co.za"
                className="mt-2 inline-block text-lg underline decoration-white/30 underline-offset-4 hover:decoration-[#FFD700]"
              >
                info@vuyelalogistics.co.za
              </a>
            </div>
            <div>
              <p className="text-sm text-[#A3A3A3]">Visit</p>
              <p className="mt-2 text-lg">By appointment.</p>
              <Link
                href="/contact"
                className="inline-block mt-3 text-sm font-medium underline decoration-white/30 underline-offset-4 hover:decoration-[#FFD700]"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
